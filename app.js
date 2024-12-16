const container = document.querySelector(".container")
const columna = document.querySelector("#rowa")
const columns = document.querySelector("#rows")
const columnd = document.querySelector("#rowd")
const columnf = document.querySelector("#rowf")

// console.log(column);

const colorChanger = (picker) => {
    for (let index = 0; index < 5; index++) {
        document.body.addEventListener("keypress", (e) => {
            let red = Math.ceil(Math.random(0, 255) * 255)
            let green = Math.ceil(Math.random(0, 255) * 255)
            let blue = Math.ceil(Math.random(0, 255) * 255)
            let alpha = Math.random(0, 255)
            // console.log(e);
            // console.log(e.key === " ");
            if (e.key === " ") {
                picker.style = `background: rgba(${red},${green},${blue},${alpha});`
                console.log(red, green, blue , index);
            }
        })
    }
}

colorChanger(columna)
colorChanger(columns)
colorChanger(columnd)
colorChanger(columnf)