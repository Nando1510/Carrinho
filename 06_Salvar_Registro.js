//GUARDA O ID DO BOTÃO SALVAR NA VARIÁVEL  botao_Salvar
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

  //produtos.push pois vai adicionar o valor a cada linha do array
  nome_Array.push({ id: proximoId++, nome_Input1, nome_Input2, nome_Input3 });

  carregarDados();

  limpar_Inputs();
}
