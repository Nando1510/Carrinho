//ESSE ARQUIVO É INTEIRO, COMPLETO.

let nome_Array = [];
let proximoId = 1;

const botao_Cancelar = document.getElementById('cancelar');

botao_Cancelar.addEventListener('click', limpar_Inputs);

 function limpar_Inputs(){
      document.getElementById('limpar_Inputs').reset();
  };


const botao_Salvar = document.getElementById('salvar');
botao_Salvar.addEventListener('click', salvar_Resgistro);

function salvar_Resgistro(){
  const nome_Input1 = document.getElementById('id_Input1').value.trim();

  //CASO SEJA UM PREÇO, POR EXEMPLO
  const nome_Input2 = parseFloat(document.getElementById('id_Input2').value);

  //CASO SEJA UMA QUANTIDADE, POR EXEMPLO
  const nome_Input1 = parseInt(document.getElementById('is_Input3').value);

  if (!nome_Input11 || !nome_Input2 || !nome_Input3){
    alert('Preencha os campos!!!');
    return
  }

  //produtos.push pois vai adicionar o valoe a cada linha do array
  nome_Array.push({ id: proximoId++, nome_Input1, npme_Input2, nome_Input3 });

  carregarDados();

  limpar_Inputs();
}

function carregarDados() {
    const corpo = document.getElementById('tbody');
    corpo.innerHTML = '';

    for (let i = 0; i < nome_Array.length; i++) {
      const item = nome_Array[i]; // pega o produto atual

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nome_Input1}</td>

        //CASO SEJA UM PREÇO, POR EXEMPLO
        <td>${item.nome_Input2}</td>

        //CASO SEJA UMA QUANTIDADE, POR EXEMPLO
        <td>${item.nome_Input3}</td>

        
        <td>R$ ${(item.nome_Input2 * item.nome_Input3).toFixed(2)}</td>
        <td>
          <span class="icon" onclick="iniciarEdicao(this, ${item.id})">✏️</span>
          <span class="icon" onclick="excluirRegistro(${item.id})">🗑️</span>
        </td>
      `;

      corpo.appendChild(tr);
    }

    atualizarTotal();
  
}

function atualizarTotal() {    //ARRAY
  const valor_Total_Produtos = nome_Array.reduce((acumulador, item) => {

                              //   VALOR               PREÇO
      return   acumulador + (item.nome_Input2 * item.nome_Input3) }, 0);
      
  document.getElementById('total-compras').textContent =
    `Total das compras: R$ ${valor_Total_Produtos.toFixed(2)}`;
}


function iniciarEdicao(el, id) {
      const tr = el.closest('tr');
      const cells = tr.querySelectorAll('td');
      ['nome_Input1', 'nome_Input2', 'nome_Input3'].forEach((field, idx) => {
        const td = cells[idx + 1];
        const valor = td.textContent;
        td.innerHTML = `<input class="edit-field" id="edit-${field}-${id}" value="${valor}">`;
      });
      el.textContent = '💾';
      el.onclick = () => salvarEdicao(id);
}

function salvarEdicao(id) {
  const nome_Input1 = document.getElementById(`edit-nome_Input1-${id}`).value.trim();
                                                        //  QUANTIADE
  const nome_Input2 = parseInt(document.getElementById(`edit-nome_Input2-${id}`).value);
                                                        //  PREÇO
  const nome_Input3 = parseFloat(document.getElementById(`edit-nome_Input3-${id}`).value);

  if (!nome_Input1 || !nome_Input2 || !nome_Input3) {
    alert('Preencha todos os campos!!!');
    return;
  }

  const index = nome_Array.findIndex(item => item.id === id);
  nome_Array[index] = { id, nome_Input1, nome_Input2, nome_Input3 };

  carregarDados();
}

function excluirRegistro(id) {
  if (!confirm('Deseja realmente excluir este produto?')) return;

  //ARRAY        ARRAY
  nome_Array = nome_Array.filter((item)=>{
    if(item.id !== id ){
      return item.id
    }
  })
  //nome_Array = nome_Array.filter(p => p.id !== id);
  carregarDados();
}
