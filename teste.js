export class FetchCep {
    static fetchAddressByCep = (cep, inputsAdress) => {        
        const apiURL = `https://brasilapi.com.br/api/cep/v1/${cep}`;
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    return {
                        city: '',
                        state: '',
                        street: '',
                        neighborhood: '',
                    }
                }
    
                return response.json();
            })
            .then(data => {
                console.log(data);
                Object.keys(inputsAdress).forEach(key => {
                    if (data[key]) {
                        inputsAdress[key].value = data[key];
                    } else {
                        inputsAdress[key].value = '';
                    }
                });
            });
    }
}

FetchCep.fetchAddressByCep('27541240', {});