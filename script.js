
i.addEventListener('input',decoder);


function decoder(){
output.textContent = rot13(i.value.toUpperCase())
}