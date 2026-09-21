const menuData = [
    {
      id: 1,
      name: 'Margherita Tradizionale',
      category: 'pizzas',
      price: 49.9,
      description:
        'Molho de tomate San Marzano, mozzarella di búfala fresca, manjericão orgânico e azeite extra virgem.',
      image: 'https://placehold.co/600x400/881337/ffffff?text=Margherita',
      hasOptions: true,
      sizes: [
        { name: 'Média (6 pedaços)', price: 0 },
        { name: 'Grande (8 pedaços)', price: 15.0 },
        { name: 'Família (12 pedaços)', price: 28.0 },
      ],
      crusts: [
        { name: 'Borda Tradicional', price: 0 },
        { name: 'Borda Recheada de Catupiry', price: 9.0 },
        { name: 'Borda Recheada de Cheddar', price: 9.0 },
      ],
      extras: [
        { name: 'Extra Mozzarella', price: 7.0 },
        { name: 'Manjericão Dobrado', price: 3.0 },
        { name: 'Alho Frito', price: 4.0 },
      ],
    },
    {
      id: 2,
      name: 'Pepperoni Supremo',
      category: 'pizzas',
      price: 62.9,
      description:
        'Molho de tomate artesanal, generosas fatias de pepperoni importado, mozzarella derretida e orégano.',
      image: 'https://placehold.co/600x400/be123c/ffffff?text=Pepperoni',
      hasOptions: true,
      sizes: [
        { name: 'Média (6 pedaços)', price: 0 },
        { name: 'Grande (8 pedaços)', price: 18.0 },
        { name: 'Família (12 pedaços)', price: 32.0 },
      ],
      crusts: [
        { name: 'Borda Tradicional', price: 0 },
        { name: 'Borda Recheada de Catupiry', price: 9.0 },
      ],
      extras: [
        { name: 'Pepperoni Extra', price: 10.0 },
        { name: 'Pimenta Jalapeño', price: 5.0 },
      ],
    },
    {
      id: 3,
      name: 'Quattro Formaggi',
      category: 'pizzas',
      price: 65.0,
      description:
        'Molho branco especial, mozzarella, gorgonzola importado, provolone defumado e parmesão gratinado.',
      image: 'https://placehold.co/600x400/9f1239/ffffff?text=Quattro+Formaggi',
      hasOptions: true,
      sizes: [
        { name: 'Média (6 pedaços)', price: 0 },
        { name: 'Grande (8 pedaços)', price: 18.0 },
        { name: 'Família (12 pedaços)', price: 30.0 },
      ],
      crusts: [
        { name: 'Borda Tradicional', price: 0 },
        { name: 'Borda Recheada de Catupiry', price: 9.0 },
      ],
      extras: [
        { name: 'Mel Orgânico', price: 6.0 },
        { name: 'Parmesão Extra', price: 7.0 },
      ],
    },
    {
      id: 4,
      name: 'Frango com Catupiry',
      category: 'pizzas',
      price: 58.0,
      description:
        'Frango desfiado temperado ao molho de tomate, catupiry original cremoso e milho verde.',
      image: 'https://placehold.co/600x400/b45309/ffffff?text=Frango+Catupiry',
      hasOptions: true,
      sizes: [
        { name: 'Média (6 pedaços)', price: 0 },
        { name: 'Grande (8 pedaços)', price: 16.0 },
        { name: 'Família (12 pedaços)', price: 29.0 },
      ],
      crusts: [
        { name: 'Borda Tradicional', price: 0 },
        { name: 'Borda Recheada de Catupiry', price: 9.0 },
      ],
      extras: [
        { name: 'Bacon Crocante', price: 8.0 },
        { name: 'Catupiry Extra', price: 8.0 },
      ],
    },
    {
      id: 5,
      name: 'Coca-Cola 2L',
      category: 'drinks',
      price: 14.0,
      description: 'Refrigerante gelado 2 litros.',
      image: 'https://placehold.co/600x400/1c1917/ffffff?text=Coca-Cola+2L',
      hasOptions: false,
    },
    {
      id: 6,
      name: 'Suco de Laranja Natural 1L',
      category: 'drinks',
      price: 16.0,
      description: 'Suco 100% natural espremido na hora.',
      image: 'https://placehold.co/600x400/d97706/ffffff?text=Suco+de+Laranja',
      hasOptions: false,
    },
    {
      id: 7,
      name: 'Cerveja Artesanal IPA 500ml',
      category: 'drinks',
      price: 22.0,
      description: 'Cerveja IPA gelada, notas cítricas e marcantes.',
      image: 'https://placehold.co/600x400/78350f/ffffff?text=Cerveja+IPA',
      hasOptions: false,
    },
    {
      id: 8,
      name: 'Pizza de Nutella com Morango',
      category: 'desserts',
      price: 54.9,
      description:
        'Deliciosa massa doce assada coberta com creme de avelã Nutella e morangos frescos.',
      image: 'https://placehold.co/600x400/581c87/ffffff?text=Nutella+Morango',
      hasOptions: false,
    },
    {
      id: 9,
      name: 'Petit Gâteau com Sorvete',
      category: 'desserts',
      price: 24.0,
      description:
        'Bolinho de chocolate recheado com ganache quente, acompanhado de bola de sorvete de baunilha.',
      image: 'https://placehold.co/600x400/451a03/ffffff?text=Petit+Gateau',
      hasOptions: false,
    },
  ];
  
  let cart = [];
  let activeOrders = [];
  let currentFilter = 'all';
  let searchQuery = '';
  let currentModalItem = null;
  let modalQuantity = 1;
  
  window.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    loadLocalStorageData();
    updateCartUI();
    updateActiveOrdersBadge();
  });
  
  function switchTab(tabName) {
    const tabMenu = document.getElementById('tab-menu');
    const tabOrders = document.getElementById('tab-orders');
    const navMenu = document.getElementById('nav-menu');
    const navOrders = document.getElementById('nav-orders');
  
    if (tabName === 'menu') {
      tabMenu.classList.remove('hidden');
      tabOrders.classList.add('hidden');
      navMenu.className =
        'text-amber-400 border-b-2 border-amber-400 pb-1 transition';
      navOrders.className =
        'text-stone-300 hover:text-amber-400 transition relative';
    } else {
      tabMenu.classList.add('hidden');
      tabOrders.classList.remove('hidden');
      navOrders.className =
        'text-amber-400 border-b-2 border-amber-400 pb-1 transition relative';
      navMenu.className = 'text-stone-300 hover:text-amber-400 transition';
      renderOrdersBoard();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }
  
  function filterCategory(category) {
    currentFilter = category;
    document.querySelectorAll('.category-btn').forEach((btn) => {
      btn.className =
        'category-btn px-5 py-2.5 rounded-xl font-semibold text-sm transition bg-white text-stone-600 hover:bg-stone-100 border border-stone-200 whitespace-nowrap';
    });
    const activeBtn = document.getElementById(`cat-${category}`);
    if (activeBtn) {
      activeBtn.className =
        'category-btn px-5 py-2.5 rounded-xl font-semibold text-sm transition bg-amber-500 text-stone-950 shadow-md whitespace-nowrap';
    }
    renderMenu();
  }
  
  function handleSearch() {
    searchQuery = document.getElementById('search-input').value.toLowerCase();
    renderMenu();
  }
  
  function renderMenu() {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
  
    const filtered = menuData.filter((item) => {
      const matchesCat =
        currentFilter === 'all' || item.category === currentFilter;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery);
      return matchesCat && matchesSearch;
    });
  
    if (filtered.length === 0) {
      grid.innerHTML = `
                      <div class="col-span-full py-16 text-center text-stone-500">
                          <i class="fa-solid fa-utensils text-4xl mb-3 text-stone-300"></i>
                          <p class="text-lg font-medium">Nenhum item encontrado.</p>
                      </div>
                  `;
      return;
    }
  
    filtered.forEach((item) => {
      const card = document.createElement('div');
      card.className =
        'bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition flex flex-col justify-between group';
      card.innerHTML = `
                      <div class="relative h-48 overflow-hidden bg-stone-100">
                          <img src="${item.image}" alt="${
        item.name
      }" onerror="this.src='https://placehold.co/600x400/881337/ffffff?text=Bella+Italia'" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                          <span class="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md text-amber-400 font-bold px-3 py-1 rounded-full text-xs shadow">
                              R$ ${item.price.toFixed(2).replace('.', ',')}
                          </span>
                      </div>
                      <div class="p-5 flex flex-col flex-grow justify-between space-y-4">
                          <div class="space-y-1">
                              <h3 class="font-serif text-lg font-bold text-stone-900">${
                                item.name
                              }</h3>
                              <p class="text-stone-500 text-xs line-clamp-2 leading-relaxed">${
                                item.description
                              }</p>
                          </div>
                          <button onclick="handleItemClick(${
                            item.id
                          })" class="w-full bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-white font-semibold py-2.5 rounded-xl transition flex items-center justify-center space-x-2 text-sm shadow-sm">
                              <i class="fa-solid fa-plus"></i>
                              <span>Adicionar Pedido</span>
                          </button>
                      </div>
                  `;
      grid.appendChild(card);
    });
  }
  
  function handleItemClick(id) {
    const item = menuData.find((i) => i.id === id);
    if (!item) return;
  
    if (item.hasOptions) {
      openCustomizationModal(item);
    } else {
      addToCartDirectly(item);
    }
  }
  
  function openCustomizationModal(item) {
    currentModalItem = item;
    modalQuantity = 1;
  
    document.getElementById('modal-item-img').src = item.image;
    document.getElementById('modal-item-name').innerText = item.name;
    document.getElementById(
      'modal-item-price'
    ).innerText = `A partir de R$ ${item.price.toFixed(2).replace('.', ',')}`;
    document.getElementById('modal-item-qty').innerText = modalQuantity;
  
    const body = document.getElementById('modal-options-body');
    let html = '';
  
    // Sizes
    if (item.sizes && item.sizes.length > 0) {
      html += `
                      <div class="space-y-3">
                          <label class="block font-semibold text-stone-900 text-sm">Escolha o Tamanho *</label>
                          <div class="space-y-2">
                  `;
      item.sizes.forEach((size, idx) => {
        html += `
                          <label class="flex items-center justify-between p-3 border border-stone-200 rounded-xl cursor-pointer hover:border-amber-500 transition has-[:checked]:bg-amber-50 has-[:checked]:border-amber-500">
                              <div class="flex items-center space-x-3">
                                  <input type="radio" name="modal-size" value="${idx}" ${
          idx === 0 ? 'checked' : ''
        } onchange="updateModalPrice()" class="text-amber-600 focus:ring-amber-500">
                                  <span class="text-sm font-medium text-stone-800">${
                                    size.name
                                  }</span>
                              </div>
                              <span class="text-xs font-bold text-stone-600">+ R$ ${size.price
                                .toFixed(2)
                                .replace('.', ',')}</span>
                          </label>
                      `;
      });
      html += `</div></div>`;
    }
  
    // Crusts
    if (item.crusts && item.crusts.length > 0) {
      html += `
                      <div class="space-y-3 pt-2">
                          <label class="block font-semibold text-stone-900 text-sm">Tipo de Borda</label>
                          <div class="space-y-2">
                  `;
      item.crusts.forEach((crust, idx) => {
        html += `
                          <label class="flex items-center justify-between p-3 border border-stone-200 rounded-xl cursor-pointer hover:border-amber-500 transition has-[:checked]:bg-amber-50 has-[:checked]:border-amber-500">
                              <div class="flex items-center space-x-3">
                                  <input type="radio" name="modal-crust" value="${idx}" ${
          idx === 0 ? 'checked' : ''
        } onchange="updateModalPrice()" class="text-amber-600 focus:ring-amber-500">
                                  <span class="text-sm font-medium text-stone-800">${
                                    crust.name
                                  }</span>
                              </div>
                              <span class="text-xs font-bold text-stone-600">+ R$ ${crust.price
                                .toFixed(2)
                                .replace('.', ',')}</span>
                          </label>
                      `;
      });
      html += `</div></div>`;
    }
  
    // Extras
    if (item.extras && item.extras.length > 0) {
      html += `
                      <div class="space-y-3 pt-2">
                          <label class="block font-semibold text-stone-900 text-sm">Ingredientes Extras</label>
                          <div class="space-y-2">
                  `;
      item.extras.forEach((extra, idx) => {
        html += `
                          <label class="flex items-center justify-between p-3 border border-stone-200 rounded-xl cursor-pointer hover:border-amber-500 transition has-[:checked]:bg-amber-50 has-[:checked]:border-amber-500">
                              <div class="flex items-center space-x-3">
                                  <input type="checkbox" name="modal-extra" value="${idx}" onchange="updateModalPrice()" class="rounded text-amber-600 focus:ring-amber-500">
                                  <span class="text-sm font-medium text-stone-800">${
                                    extra.name
                                  }</span>
                              </div>
                              <span class="text-xs font-bold text-stone-600">+ R$ ${extra.price
                                .toFixed(2)
                                .replace('.', ',')}</span>
                          </label>
                      `;
      });
      html += `</div></div>`;
    }
  
    body.innerHTML = html;
    updateModalPrice();
    document.getElementById('customization-modal').classList.remove('hidden');
  }
  
  function closeCustomizationModal() {
    document.getElementById('customization-modal').classList.add('hidden');
    currentModalItem = null;
  }
  
  function adjustModalQty(change) {
    modalQuantity += change;
    if (modalQuantity < 1) modalQuantity = 1;
    document.getElementById('modal-item-qty').innerText = modalQuantity;
    updateModalPrice();
  }
  
  function calculateCurrentModalItemPrice() {
    if (!currentModalItem) return 0;
    let total = currentModalItem.price;
  
    // Size
    if (currentModalItem.sizes) {
      const selectedSizeInput = document.querySelector(
        'input[name="modal-size"]:checked'
      );
      if (selectedSizeInput) {
        const sizeIdx = parseInt(selectedSizeInput.value);
        total += currentModalItem.sizes[sizeIdx].price;
      }
    }
  
    // Crust
    if (currentModalItem.crusts) {
      const selectedCrustInput = document.querySelector(
        'input[name="modal-crust"]:checked'
      );
      if (selectedCrustInput) {
        const crustIdx = parseInt(selectedCrustInput.value);
        total += currentModalItem.crusts[crustIdx].price;
      }
    }
  
    // Extras
    if (currentModalItem.extras) {
      const selectedExtras = document.querySelectorAll(
        'input[name="modal-extra"]:checked'
      );
      selectedExtras.forEach((chk) => {
        const extraIdx = parseInt(chk.value);
        total += currentModalItem.extras[extraIdx].price;
      });
    }
  
    return total * modalQuantity;
  }
  
  function updateModalPrice() {
    const totalPrice = calculateCurrentModalItemPrice();
    document.getElementById(
      'modal-add-btn-text'
    ).innerText = `Adicionar • R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
  }
  
  function confirmAddToCart() {
    if (!currentModalItem) return;
  
    let selectedSizeName = '';
    let selectedCrustName = '';
    let selectedExtrasArr = [];
  
    if (currentModalItem.sizes) {
      const sizeInput = document.querySelector(
        'input[name="modal-size"]:checked'
      );
      if (sizeInput) {
        selectedSizeName = currentModalItem.sizes[parseInt(sizeInput.value)].name;
      }
    }
  
    if (currentModalItem.crusts) {
      const crustInput = document.querySelector(
        'input[name="modal-crust"]:checked'
      );
      if (crustInput) {
        selectedCrustName =
          currentModalItem.crusts[parseInt(crustInput.value)].name;
      }
    }
  
    if (currentModalItem.extras) {
      const extraInputs = document.querySelectorAll(
        'input[name="modal-extra"]:checked'
      );
      extraInputs.forEach((chk) => {
        selectedExtrasArr.push(currentModalItem.extras[parseInt(chk.value)].name);
      });
    }
  
    const unitPrice = calculateCurrentModalItemPrice() / modalQuantity;
  
    const cartItem = {
      cartId: Date.now() + Math.random(),
      id: currentModalItem.id,
      name: currentModalItem.name,
      image: currentModalItem.image,
      unitPrice: unitPrice,
      quantity: modalQuantity,
      size: selectedSizeName,
      crust: selectedCrustName,
      extras: selectedExtrasArr,
    };
  
    cart.push(cartItem);
    closeCustomizationModal();
    updateCartUI();
    showToast(`${currentModalItem.name} adicionado à sacola!`, 'success');
    openCartDrawer();
  }
  
  function addToCartDirectly(item) {
    const cartItem = {
      cartId: Date.now() + Math.random(),
      id: item.id,
      name: item.name,
      image: item.image,
      unitPrice: item.price,
      quantity: 1,
      size: '',
      crust: '',
      extras: [],
    };
  
    cart.push(cartItem);
    updateCartUI();
    showToast(`${item.name} adicionado à sacola!`, 'success');
    openCartDrawer();
  }
  
  function openCartDrawer() {
    document.getElementById('cart-overlay').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('cart-overlay').classList.remove('opacity-0');
      document.getElementById('cart-drawer').classList.remove('translate-x-full');
    }, 10);
  }
  
  function closeCartDrawer() {
    document.getElementById('cart-drawer').classList.add('translate-x-full');
    document.getElementById('cart-overlay').classList.add('opacity-0');
    setTimeout(() => {
      document.getElementById('cart-overlay').classList.add('hidden');
    }, 300);
  }
  
  function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.innerText = totalItems;
  
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
  
    if (cart.length === 0) {
      container.innerHTML = `
                      <div class="py-16 text-center text-stone-400 space-y-3">
                          <i class="fa-solid fa-bag-shopping text-5xl text-stone-300"></i>
                          <p class="font-medium text-stone-600">Sua sacola está vazia</p>
                          <p class="text-xs">Adicione itens deliciosos do cardápio para começar.</p>
                      </div>
                  `;
      subtotalEl.innerText = 'R$ 0,00';
      totalEl.innerText = 'R$ 0,00';
      checkoutBtn.disabled = true;
      return;
    }
  
    checkoutBtn.disabled = false;
    container.innerHTML = '';
    let subtotal = 0;
  
    cart.forEach((item) => {
      const itemTotal = item.unitPrice * item.quantity;
      subtotal += itemTotal;
  
      let detailsHtml = '';
      if (item.size) detailsHtml += `<span class="block">${item.size}</span>`;
      if (item.crust) detailsHtml += `<span class="block">${item.crust}</span>`;
      if (item.extras && item.extras.length > 0) {
        detailsHtml += `<span class="block">Extras: ${item.extras.join(
          ', '
        )}</span>`;
      }
  
      const div = document.createElement('div');
      div.className = 'py-4 flex items-start space-x-3';
      div.innerHTML = `
                      <img src="${item.image}" alt="${
        item.name
      }" onerror="this.src='https://placehold.co/100x100/881337/ffffff?text=Item'" class="w-16 h-16 rounded-xl object-cover border border-stone-200">
                      <div class="flex-grow space-y-1">
                          <div class="flex justify-between">
                              <h4 class="font-bold text-sm text-stone-900">${
                                item.name
                              }</h4>
                              <button onclick="removeFromCart('${
                                item.cartId
                              }')" class="text-stone-400 hover:text-pizza-600 transition"><i class="fa-solid fa-trash-can text-xs"></i></button>
                          </div>
                          <div class="text-xs text-stone-500 leading-tight">${detailsHtml}</div>
                          <div class="flex justify-between items-center pt-2">
                              <div class="flex items-center space-x-2 border border-stone-200 rounded-lg px-2 py-0.5 bg-stone-50">
                                  <button onclick="adjustCartQty('${
                                    item.cartId
                                  }', -1)" class="text-stone-500 hover:text-stone-900 px-1"><i class="fa-solid fa-minus text-xs"></i></button>
                                  <span class="text-xs font-bold w-4 text-center">${
                                    item.quantity
                                  }</span>
                                  <button onclick="adjustCartQty('${
                                    item.cartId
                                  }', 1)" class="text-stone-500 hover:text-stone-900 px-1"><i class="fa-solid fa-plus text-xs"></i></button>
                              </div>
                              <span class="font-bold text-xs text-amber-600">R$ ${itemTotal
                                .toFixed(2)
                                .replace('.', ',')}</span>
                          </div>
                      </div>
                  `;
      container.appendChild(div);
    });
  
    const deliveryFee = 8.0;
    const grandTotal = subtotal + deliveryFee;
  
    subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    totalEl.innerText = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;
  }
  
  function adjustCartQty(cartId, change) {
    const item = cart.find((i) => i.cartId == cartId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(cartId);
    } else {
      updateCartUI();
    }
  }
  
  function removeFromCart(cartId) {
    cart = cart.filter((i) => i.cartId != cartId);
    updateCartUI();
    showToast('Item removido da sacola.', 'info');
  }
  
  function clearCartConfirm() {
    if (confirm('Deseja realmente esvaziar sua sacola?')) {
      cart = [];
      updateCartUI();
      showToast('Sacola esvaziada.', 'info');
    }
  }
  
  function openCheckoutModal() {
    if (cart.length === 0) return;
    closeCartDrawer();
  
    const subtotal = cart.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0
    );
    const grandTotal = subtotal + 8.0;
    document.getElementById('checkout-total-val').innerText = `R$ ${grandTotal
      .toFixed(2)
      .replace('.', ',')}`;
    document.getElementById('checkout-modal').classList.remove('hidden');
  }
  
  function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
  }
  
  function submitCheckout(e) {
    e.preventDefault();
  
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const street = document.getElementById('cust-street').value;
    const number = document.getElementById('cust-number').value;
    const neighborhood = document.getElementById('cust-neighborhood').value;
    const complement = document.getElementById('cust-complement').value;
    const paymentMethod = document.querySelector(
      'input[name="payment"]:checked'
    ).value;
  
    const subtotal = cart.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0
    );
    const total = subtotal + 8.0;
  
    const newOrder = {
      id: 'PED-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      customer: {
        name,
        phone,
        address: `${street}, ${number} - ${neighborhood} ${
          complement ? '(' + complement + ')' : ''
        }`,
      },
      items: [...cart],
      payment: paymentMethod,
      total: total,
      statusIndex: 0, // 0: Pendente, 1: Preparando, 2: Saiu para Entrega, 3: Entregue
      statusText: 'Pedido Recebido / Pendente',
    };
  
    activeOrders.unshift(newOrder);
    saveLocalStorageData();
    cart = [];
    updateCartUI();
    updateActiveOrdersBadge();
    closeCheckoutModal();
  
    document.getElementById('checkout-form').reset();
    switchTab('orders');
    showToast('Pedido realizado com sucesso!', 'success');
  
    // Simulate progression of order status
    simulateOrderStatusProgression(newOrder.id);
  }
  
  function simulateOrderStatusProgression(orderId) {
    setTimeout(() => {
      updateOrderStatus(orderId, 1, 'Em Preparo na Cozinha');
    }, 8000);
  
    setTimeout(() => {
      updateOrderStatus(orderId, 2, 'Saiu para Entrega');
    }, 25000);
  
    setTimeout(() => {
      updateOrderStatus(orderId, 3, 'Pedido Entregue com Sucesso');
    }, 45000);
  }
  
  function updateOrderStatus(orderId, statusIdx, statusText) {
    const order = activeOrders.find((o) => o.id === orderId);
    if (order) {
      order.statusIndex = statusIdx;
      order.statusText = statusText;
      saveLocalStorageData();
      if (!document.getElementById('tab-orders').classList.contains('hidden')) {
        renderOrdersBoard();
      }
    }
  }
  
  function cancelOrder(orderId) {
    const order = activeOrders.find((o) => o.id === orderId);
    if (!order) return;
  
    if (order.statusIndex > 0) {
      showToast(
        'Não é possível cancelar. O pedido já está em preparação ou a caminho!',
        'error'
      );
      return;
    }
  
    if (confirm(`Deseja realmente cancelar o pedido ${orderId}?`)) {
      activeOrders = activeOrders.filter((o) => o.id !== orderId);
      saveLocalStorageData();
      renderOrdersBoard();
      updateActiveOrdersBadge();
      showToast('Pedido cancelado com sucesso.', 'info');
    }
  }
  
  function renderOrdersBoard() {
    const container = document.getElementById('orders-container');
    container.innerHTML = '';
  
    if (activeOrders.length === 0) {
      container.innerHTML = `
                      <div class="py-16 text-center text-stone-400 space-y-3">
                          <i class="fa-solid fa-box-open text-5xl text-stone-300"></i>
                          <p class="font-medium text-stone-600">Nenhum pedido ativo no momento</p>
                          <p class="text-xs">Faça um pedido em nosso cardápio para acompanhar o status aqui.</p>
                      </div>
                  `;
      return;
    }
  
    activeOrders.forEach((order) => {
      const statuses = [
        'Pendente',
        'Preparando',
        'Saiu para Entrega',
        'Entregue',
      ];
  
      let stepsHtml = '';
      for (let i = 0; i < 4; i++) {
        const isCompleted = i <= order.statusIndex;
        const isCurrent = i === order.statusIndex;
  
        let dotColor = isCompleted
          ? 'bg-amber-500 text-stone-950 border-amber-500'
          : 'bg-stone-100 text-stone-400 border-stone-200';
        if (isCurrent && i < 3)
          dotColor += ' animate-pulse ring-4 ring-amber-100';
  
        stepsHtml += `
                          <div class="flex flex-col items-center flex-1 relative">
                              <div class="w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs ${dotColor} z-10">
                                  ${
                                    i < order.statusIndex
                                      ? '<i class="fa-solid fa-check"></i>'
                                      : i + 1
                                  }
                              </div>
                              <span class="text-[11px] mt-2 font-medium text-center ${
                                isCurrent
                                  ? 'text-amber-700 font-bold'
                                  : 'text-stone-500'
                              }">${statuses[i]}</span>
                          </div>
                      `;
      }
  
      let itemsListHtml = order.items
        .map(
          (i) => `
                      <div class="text-xs text-stone-600 flex justify-between py-0.5">
                          <span>${i.quantity}x ${i.name} ${
            i.size ? '(' + i.size + ')' : ''
          }</span>
                          <span>R$ ${(i.unitPrice * i.quantity)
                            .toFixed(2)
                            .replace('.', ',')}</span>
                      </div>
                  `
        )
        .join('');
  
      const div = document.createElement('div');
      div.className =
        'bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-6';
      div.innerHTML = `
                      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
                          <div>
                              <div class="flex items-center space-x-3">
                                  <span class="font-bold text-stone-900">${
                                    order.id
                                  }</span>
                                  <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">${
                                    order.statusText
                                  }</span>
                              </div>
                              <span class="text-xs text-stone-400">Realizado às ${
                                order.date
                              }</span>
                          </div>
                          <div class="flex items-center space-x-3">
                              <span class="font-bold text-stone-900">R$ ${order.total
                                .toFixed(2)
                                .replace('.', ',')}</span>
                              ${
                                order.statusIndex === 0
                                  ? `<button onclick="cancelOrder('${order.id}')" class="bg-stone-100 hover:bg-pizza-50 text-pizza-600 border border-stone-200 px-3 py-1.5 rounded-xl text-xs font-bold transition">Cancelar Pedido</button>`
                                  : ''
                              }
                          </div>
                      </div>
  
                      <!-- Timeline Progress Bar -->
                      <div class="relative pt-2 pb-1">
                          <div class="absolute top-6 left-6 right-6 h-1 bg-stone-200 -z-0"></div>
                          <div class="flex justify-between relative z-10">
                              ${stepsHtml}
                          </div>
                      </div>
  
                      <div class="bg-stone-50 rounded-xl p-4 space-y-2 text-sm">
                          <div class="font-semibold text-stone-800 text-xs uppercase tracking-wider mb-1">Resumo dos Itens</div>
                          ${itemsListHtml}
                          <div class="border-t border-stone-200 pt-2 mt-2 flex justify-between text-xs text-stone-500">
                              <span>Pagamento: ${order.payment}</span>
                              <span>Entrega no endereço: ${
                                order.customer.address
                              }</span>
                          </div>
                      </div>
                  `;
      container.appendChild(div);
    });
  }
  
  function updateActiveOrdersBadge() {
    const activeCount = activeOrders.filter((o) => o.statusIndex < 3).length;
    const badge = document.getElementById('active-orders-badge');
    if (activeCount > 0) {
      badge.innerText = activeCount;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
  
  function saveLocalStorageData() {
    localStorage.setItem('bella_italia_orders', JSON.stringify(activeOrders));
  }
  
  function loadLocalStorageData() {
    const saved = localStorage.getItem('bella_italia_orders');
    if (saved) {
      try {
        activeOrders = JSON.parse(saved);
      } catch (e) {
        activeOrders = [];
      }
    }
  }
  
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
  
    let bg = 'bg-stone-900 text-white';
    let icon = 'fa-circle-check text-amber-400';
    if (type === 'error') {
      bg = 'bg-pizza-600 text-white';
      icon = 'fa-circle-exclamation text-white';
    } else if (type === 'info') {
      bg = 'bg-stone-800 text-white';
      icon = 'fa-circle-info text-amber-400';
    }
  
    toast.className = `${bg} px-4 py-3 rounded-xl shadow-lg flex items-center space-x-3 pointer-events-auto transform translate-y-2 opacity-0 transition-all duration-300 font-medium text-sm`;
    toast.innerHTML = `<i class="fa-solid ${icon} text-lg"></i><span>${message}</span>`;
  
    container.appendChild(toast);
  
    setTimeout(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);
  
    setTimeout(() => {
      toast.classList.add('translate-y-2', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
  