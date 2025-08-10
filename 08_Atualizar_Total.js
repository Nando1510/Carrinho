function atualizarTotal() {    //ARRAY
  const valor_Total_Produtos = nome_Array.reduce((acumulador, item) => {

                              //   VALOR               QUANTIDADE
      return   acumulador + (item.nome_Input2 * item.nome_Input3) }, 0);
      
  document.getElementById('total-compras').textContent =
    `Total das compras: R$ ${valor_Total_Produtos.toFixed(2)}`;
}
