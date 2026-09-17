const ledger = {
    "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "05/07/2025" },
    "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
    "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
    "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function serializeLedger(ledger) {
    return JSON.stringify(ledger, null, 2);
}

function loadLedger(json) {
    return JSON.parse(json);
}

function toComparable(dateString) {
    const [month, day, year] = dateString.split(/[/-]/).map(Number);
    return year * 10000 + month * 100 + day;
}

function checkoutDevice(ledger, assetTag, borrower) {
    const ledgerCopy = loadLedger(serializeLedger(ledger));
    const date = "04-05-2024"

    if (!Object.hasOwn(ledgerCopy, assetTag)) {
        return {
            ledger: ledgerCopy,
            message: `Asset tag ${assetTag} does not exist in the ledger.`
        };

    }
    if (ledgerCopy[assetTag].status === "CheckedOut") {
        return {
            ledger: ledgerCopy,
            message: `Device with asset tag ${assetTag} is already checked out.`
        };

    }
    ledgerCopy[assetTag].status = "CheckedOut";
    ledgerCopy[assetTag].borrower.name = borrower.name;
    ledgerCopy[assetTag].borrower.email = borrower.email;
    ledgerCopy[assetTag].dueDate = date

    return {
        ledger: ledgerCopy,
        message: `Device with asset tag ${assetTag} has been checked out to ${borrower.name}.`
    }
}


function checkinDevice(ledger, assetTag) {
    const ledgerCopy = loadLedger(serializeLedger(ledger));
    if (!Object.hasOwn(ledgerCopy, assetTag)) {
        return {
            ledger: ledgerCopy,
            message: `Asset tag ${assetTag} does not exist in the ledger.`
        };
    }

    if (ledgerCopy[assetTag].status === "CheckedIn") {
        return {
            ledger: ledgerCopy,
            message: `Device with asset tag ${assetTag} is already checked in.`
        };
    }

    ledgerCopy[assetTag].status = "CheckedIn";
    ledgerCopy[assetTag].borrower.name = "";
    ledgerCopy[assetTag].borrower.email = "";
    ledgerCopy[assetTag].dueDate = "";

    return {
        ledger: ledgerCopy,
        message: `Device with asset tag ${assetTag} has been checked in.`
    }
}


function listOverdueDevices(ledger, today) {
    let overdueDevices = [];
    const todayComparable = toComparable(today);

    for (const assetTag in ledger) {
        const device = ledger[assetTag];
        if (device.status === "CheckedOut" && device.dueDate) {
            const dueDateComparable = toComparable(device.dueDate);
            if (dueDateComparable < todayComparable) {
                overdueDevices.push({
                    assetTag,
                    ...device
                });
            }
        }
    }

    return overdueDevices.sort((a, b) => toComparable(a.dueDate) - toComparable(b.dueDate));
}

// console.log(checkinDevice(ledger, "1"));
console.log(listOverdueDevices(ledger, "16/09/2026"));


// console.log(checkoutDevice(ledger, "2", {name :"Mary Johnson", email: "majohn@acme.com"}));
