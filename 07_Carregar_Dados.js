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
