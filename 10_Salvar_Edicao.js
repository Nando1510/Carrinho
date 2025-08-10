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
