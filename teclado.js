
let result = document.querySelector('#calculated')
        let charKeyBtn = document.querySelectorAll('.charKey')

        charKeyBtn.forEach((charKeyBtn) => {
            charKeyBtn.addEventListener('click', () => {
                
                let value = charKeyBtn.dataset.value;
                result.value += value;

            })
            

        })

        document.querySelector('#clear').addEventListener('click', () => {
            result.value = ' ';
        })

        
      
