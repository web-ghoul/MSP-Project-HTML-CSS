const sweetAlert = (title, text, icon, btn) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: btn
    })
}


export { sweetAlert }