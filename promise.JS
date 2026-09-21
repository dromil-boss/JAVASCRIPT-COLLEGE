const promise1 = new Promise((resolve, reject) => {
    let success = true
    if(success) {
        resolve({
            id: 2930309,
            username: "John Doe"
        });
    } else {
        reject(new Error("Data not fetched"));
    }
});

promise1
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.error(error)
});


const promise2 = new Promise((resolve, reject) => {
    let success = true
    if(success) {
        resolve({
            id: ALOO MASALA,
            username: "ALOO DUM"
        });
    } else {
        reject(new Error("Data not fetched"));
    }
});

promise2
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.error(error)
});

Promise1.all ([promise1,promise2])
.then((response) =>{
    console.log(response);
})
.catch((error) => {
    console.log (error);
})

promise1
.then ((response)



function fetchUserData () {
    return new Promise ((resolve , reject) => {
        let success = false ;
        if (success) {
            resolve ()
        }

    }
}

