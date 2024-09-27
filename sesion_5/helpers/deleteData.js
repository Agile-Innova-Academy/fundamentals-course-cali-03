export const deleteData= async (url, id)=>{
try {
    await fetch(`${url}/${id}`, {
        method: 'DELETE',

    }).then((response) =>
        response &&
        response.status === 200 &&
        alert("Heroe eliminado de forma correcta")
    );
} catch (error) {
    console.log(error)
}
}