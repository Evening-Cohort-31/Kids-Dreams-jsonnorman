import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li
                    data-id="${child.id}"
                    data-type="child"
                    data-wish="${child.wish}">
                    ${child.name}
         </li>`
    }
// i completely didn't noticed it was a , not a . and that almost drove me crazy.. lol

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
     const childClick = clickEvent.target 
   
    if (childClick.dataset.type === "child") {
        const childId = childClick.dataset.id

        for (const child of children) {

            if(parseInt(childId) === child.id ) {


                window.alert(`${child.name} wishes for ${child.wish}!`)   
            }  
        }
    }
})