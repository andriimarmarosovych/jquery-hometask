const headers = $('h3');
for (let i = headers.length - 1; i >= 0; i--) {
    const div = $(headers[i]).next('div');
    $(headers[i]).before(div);
}