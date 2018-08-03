const square = x => x*x
console.log(square(3))

const obj = {
    id: 101,
    print: function(){
        console.log('id', this.id)
        setTimeout(() => {
            console.log('after 0 sec id', this.id)
        },0)

        setTimeout(function() {
            console.log('after 10 sec id', this.id)
        }.bind(this), 10)
    }
}

obj.print()