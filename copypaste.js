function cp1(cp1) {
    var cpcopy =  document.getElementById(cp1);
    cpcopy.select();
    document.execCommand("copy");
}
async function cp2(cp2) {
    var cppaste =  await navigator.clipboard.readText();
    document.getElementById(cp2).value = cppaste;
}