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
