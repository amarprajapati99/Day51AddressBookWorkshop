window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml=()=>{
    const headerHtml=
    `<tr>
    <th></th>
    <th>Fullname</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip</th>
    <th>Phone Number</th>
    </tr>`;
    let innerHtml=`${headerHtml}`;
    document.querySelector('#table-display').innerHTML=innerHtml;
    if(addressBookList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for ( const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
        <tr class="trr">
            <td>${addressBookData._fullName}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zip}</td>
            <td>${addressBookData._mobileNumber}</td>
            <td>
                <img id="${addressBookData._id}" onclick="remove(this)" alt="delete" src="../Assets/delete-black-18dp.svg">
                <img id="${addressBookData._id}" onclick="update(this)" alt="edit" src="../Assets/create-black-18dp.svg">
            </td>
        </tr>
    `;
    }
        document.querySelector('#table-display').innerHTML = innerHtml;
}
