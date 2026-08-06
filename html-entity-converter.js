/*
* Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a convertHTML function that accepts a string as an argument.

The convertHTML function should return a new string by converting special characters in the argument string to their corresponding HTML entities.

& should be converted to &amp;.
< should be converted to &lt;.
> should be converted to &gt;.
" should be converted to &quot;.
' should be converted to &apos;.
Tests:
Waiting:1. You should have a convertHTML function.
Waiting:2. convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
Waiting:3. convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
Waiting:4. convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
Waiting:5. convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
Waiting:6. convertHTML("Schindler's List") should return the string Schindler&apos;s List.
Waiting:7. convertHTML("<>") should return the string &lt;&gt;.
Waiting:8. convertHTML("abc") should return the string abc.
* */

function convertHTML(str) {
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };

    return str.split('').map(char => htmlEntities[char] || char).join('');
}
