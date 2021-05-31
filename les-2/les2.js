const init = () => {
    const car = {
        brand: 'Hyundai',
        make: 'Solaris',
        color: 'Black',
        makeRed: () => {
            this.color = 'red'
        }
    }

    console.log(car)
    


}
window.onload = init