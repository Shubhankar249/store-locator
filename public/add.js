const storeForm = document.getElementById('store-form');
const storeId = document.getElementById('store-id');
const storeAddress = document.getElementById('store-address');

storeForm.addEventListener('submit', addStore);

// Send POST to server
async function addStore(e) {
    e.preventDefault();

    const store = {storeId: storeId.value, address: storeAddress.value};

    try {
        const res = await fetch('/api/stores', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(store)
        });

        if (res.status===400)
            throw Error('Store already exists')

        alert('Store added');
        window.location.href = '/index.html';
    }catch (e) {
        alert(e)
    }
}
