let logs_1 = [
    "INFO: Server started on port 3000",
    "DEBUG: user=admin token=abc123 connected",
    "WARN: High memory usage detected at 87%"
];

let logs_2 = [
    "FATAL: System overload detected, shutting down",
    "DEBUG: token=def456$ refreshed for session",
    "ERROR: Null pointer exception in module auth"
];

let logs_3 = [
    "ERROR: Failed to connect to db, retry=3",
    "DEBUG: api_key=XYZ789 used in request",
    "/INFO: Cache cleared successfully",
    "WARN: Disk usage at 92%, threshold=90%",
    "/INFO: Disk usage stabilized"
];

function sanitizeLog(entry, disallowedCharacters) {
    let modifiedEntry = entry;
    for (let i = 0; i < disallowedCharacters.length; i++) {
        modifiedEntry = modifiedEntry.replaceAll(new RegExp(disallowedCharacters[i], "g"), "#");
    }
    return modifiedEntry;
}
// console.log(sanitizeLog("DEBUG: Server started on port 3000", ["e", "E", "o", "r"]));

function cleanLogs(logs, disallowedCharacters) {
    let infoLogCount = 0;
    let sanitizedLogCount = 0;
    for (const log of  logs) {
        if (log.includes("$")) {
            return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
        }
        if (!log.startsWith("/")) {
            sanitizeLog(log, disallowedCharacters);
            sanitizedLogCount++;
        } else {
            infoLogCount++;
        }
    }
    return `Total Entry Count: ${logs.length}. Sanitized Entry Count: ${sanitizedLogCount}. Informational Entry Count: ${infoLogCount
    }. Finished sanitizing logs.`;
}

console.log(cleanLogs(logs_2, ["a", "A", "c", "T"]));
