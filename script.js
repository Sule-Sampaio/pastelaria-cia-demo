
const WHATSAPP = "5573988552247";
const DELIVERY_FEE = 8;

const ADDONS = {
  "Hambúrgueres": {
    free: [],
    paid: [
      { name:"Carne/Frango", price:5 },
      { name:"Bacon", price:5 },
      { name:"Queijo cheddar", price:4 },
      { name:"Ovo", price:1.5 },
      { name:"Cebola caramelizada", price:2 }
    ]
  },
  "Acarajé": {
    free: [],
    paid: [
      { name:"Camarão", price:2 },
      { name:"Camarão seco", price:2 },
      { name:"Camarão fresco", price:7 },
      { name:"Frango", price:2 },
      { name:"Filezinho de camarão", price:5 }
    ]
  },
  "Pastéis Tradicionais": {
    free:["Catupiry","Cheddar","Milho","Orégano","Tomate"],
    paid:[
      { name:"Queijo", price:4 },
      { name:"Carne seca", price:5 },
      { name:"Bacon", price:5 },
      { name:"Banana", price:3 },
      { name:"Uva passa", price:1 }
    ]
  },
  "Pastéis Premium": {
    free:["Catupiry","Cheddar","Milho","Orégano","Tomate"],
    paid:[
      { name:"Queijo", price:4 },
      { name:"Carne seca", price:5 },
      { name:"Bacon", price:5 },
      { name:"Filezinho", price:5 },
      { name:"Camarão", price:7 }
    ]
  },
  "Pastéis Doces": {
    free:[],
    paid:[
      { name:"Doce de leite", price:4 },
      { name:"Queijo", price:4 },
      { name:"Goiabada", price:3 },
      { name:"Brigadeiro", price:5 },
      { name:"Banana prata", price:2 },
      { name:"Banana terra", price:3 }
    ]
  }
};

let customizerContext = null;


const products = [
  { id:1, category:"Hambúrgueres", name:"Clássico", desc:"Blend de 90g, presunto, muçarela, alface, tomate e cebola.", prices:{"Único":17} },
  { id:2, category:"Hambúrgueres", name:"Bacon", desc:"Blend de 90g, bacon, queijo cheddar, presunto, muçarela, alface, tomate e cebola caramelizada.", prices:{"Único":18} },
  { id:3, category:"Hambúrgueres", name:"Godzilla", desc:"2 blends de 90g, presunto, queijo cheddar, bacon, ovo, alface, tomate e cebola caramelizada.", prices:{"Único":25} },
  { id:4, category:"Combos", name:"Combo Clássico", desc:"Clássico + 1 Coca lata + 1 batata 120g.", prices:{"Único":29} },
  { id:5, category:"Combos", name:"Combo Bacon", desc:"Bacon + 1 Coca lata + 1 batata 120g.", prices:{"Único":30} },
  { id:6, category:"Combos", name:"Combo Godzilla", desc:"Godzilla + 1 Coca lata + 1 batata 120g.", prices:{"Único":37} },

  { id:7, image:"assets/acaraje-saquinho.jpg", category:"Acarajé", name:"Acarajé no saquinho", desc:"Vatapá, caruru, camarão e salada.", prices:{"Único":10} },
  { id:8, image:"assets/acaraje-prato.jpg", category:"Acarajé", name:"Acarajé no prato", desc:"Vatapá, caruru, camarão e salada.", prices:{"Único":15} },
  { id:9, category:"Acarajé", name:"Porção de recheio", desc:"Vatapá, caruru, camarão e salada, sem a massa.", prices:{"Único":12} },
  { id:10, category:"Acarajé", name:"Acarajé da casa", desc:"Vatapá, caruru, camarão seco, camarão fresco, filezinho de camarão, frango, bacalhau e salada.", prices:{"Único":25} },
  { id:11, image:"assets/barca-acaraje.jpg", category:"Acarajé", name:"Barca M", desc:"25 bolinhos, vatapá, caruru, camarão, salada e frango.", prices:{"Único":25} },
  { id:12, image:"assets/barca-acaraje.jpg", category:"Acarajé", name:"Barca G", desc:"40 bolinhos, vatapá, caruru, camarão, salada e frango.", prices:{"Único":40} },
  { id:13, category:"Acarajé", name:"Abará no saquinho", desc:"Pedir com antecedência. Tempo aproximado de preparo: 40 min.", prices:{"Único":15} },
  { id:14, category:"Acarajé", name:"Abará no prato", desc:"Pedir com antecedência. Tempo aproximado de preparo: 40 min.", prices:{"Único":20} },

  { id:15, category:"Pastéis Tradicionais", name:"Frango", desc:"Frango e queijo.", prices:{"M":15,"G":22} },
  { id:16, category:"Pastéis Tradicionais", name:"Carne", desc:"Carne com queijo.", prices:{"M":15,"G":22} },
  { id:17, category:"Pastéis Tradicionais", name:"Presunto", desc:"Presunto e queijo.", prices:{"M":15,"G":22} },
  { id:18, category:"Pastéis Tradicionais", name:"Calabresa", desc:"Calabresa com queijo.", prices:{"M":15,"G":22} },
  { id:19, category:"Pastéis Tradicionais", name:"Da Casa", desc:"Frango, carne, calabresa, presunto, milho, queijo e uva passa.", prices:{"M":17,"G":25} },
  { id:20, category:"Pastéis Tradicionais", name:"Pizza", desc:"Presunto, queijo, tomate, milho e orégano.", prices:{"M":16,"G":23} },
  { id:21, category:"Pastéis Tradicionais", name:"Só Queijo", desc:"Pastel de queijo.", prices:{"M":17,"G":30} },

  { id:22, category:"Pastéis Premium", name:"Bacon", desc:"Queijo e chips de bacon.", prices:{"M":18,"G":30} },
  { id:23, category:"Pastéis Premium", name:"Caipira", desc:"Queijo, frango cremoso, milho e ovo.", prices:{"M":18,"G":30} },
  { id:24, category:"Pastéis Premium", name:"Boliviano", desc:"Carne, pimenta, uva passas e queijo. Empanado na canela com açúcar.", prices:{"M":18,"G":30} },
  { id:25, category:"Pastéis Premium", name:"Baiano", desc:"Queijo, calabresa apimentada, carne seca e banana.", prices:{"M":18,"G":30} },
  { id:26, category:"Pastéis Premium", name:"T-Rex", desc:"Queijo, iscas de carne acebolada, bacon, azeitona e cream cheese.", prices:{"M":18,"G":35} },
  { id:27, category:"Pastéis Premium", name:"Nordestino", desc:"Carne seca, banana da terra, queijo e cream cheese.", prices:{"M":18,"G":30} },
  { id:28, category:"Pastéis Premium", name:"Filezinho", desc:"Filezinho de camarão e queijo.", prices:{"M":25,"G":35} },
  { id:29, category:"Pastéis Premium", name:"Camarão", desc:"Camarão fresco, cheddar e queijo.", prices:{"M":27,"G":40} },
  { id:30, category:"Pastéis Premium", name:"Smash", desc:"Carne de hambúrguer, tomate, queijo e orégano.", prices:{"M":18,"G":30} },

  { id:31, category:"Pastéis Doces", name:"Romeu e Julieta", desc:"Queijo, goiabada e queijo parmesão.", prices:{"M":15,"G":25} },
  { id:32, category:"Pastéis Doces", name:"Banana Imperial", desc:"Banana da terra, queijo e canela. Empanado no açúcar com canela.", prices:{"M":16,"G":25} },
  { id:33, category:"Pastéis Doces", name:"Brigadeiro", desc:"Brigadeiro de chocolate com queijo.", prices:{"M":16,"G":25} },
  { id:34, category:"Pastéis Doces", name:"Banoffee", desc:"Banana da prata, doce de leite, canela e queijo.", prices:{"M":17,"G":27} },

  { id:35, category:"Pizzas", name:"Calabresa", desc:"Calabresa, mussarela e cebola.", prices:{"Único":50} },
  { id:36, category:"Pizzas", name:"Calabresa com Catupiry", desc:"Calabresa, mussarela, cebola e catupiry.", prices:{"Único":50} },
  { id:37, category:"Pizzas", name:"Baiana", desc:"Calabresa, pimenta e mussarela.", prices:{"Único":50} },
  { id:38, category:"Pizzas", name:"Frango com Milho", desc:"Frango, mussarela e milho.", prices:{"Único":50} },
  { id:39, category:"Pizzas", name:"Nordestina", desc:"Carne seca, banana, mussarela e azeitonas.", prices:{"Único":53} },
  { id:40, category:"Pizzas", name:"Portuguesa", desc:"Presunto, mussarela, ovos cozidos, tomate, pimentão, azeitonas, cebola e ervilha.", prices:{"Único":50} },
  { id:41, category:"Pizzas", name:"Mussarela", desc:"Mussarela e orégano.", prices:{"Único":53} },
  { id:42, category:"Pizzas", name:"Bacon", desc:"Bacon, mussarela e cebola.", prices:{"Único":53} },
  { id:43, category:"Pizzas", name:"Da Casa", desc:"Calabresa, bacon, cheddar, mussarela, batata palha, azeitonas e uvas passas.", prices:{"Único":50} },
  { id:44, category:"Pizzas", name:"Quatro Queijos", desc:"Mussarela, cheddar, catupiry e parmesão.", prices:{"Único":53} },
  { id:45, category:"Pizzas", name:"Camarão", desc:"Mussarela, camarão e orégano.", prices:{"Único":70} },
  { id:46, category:"Pizzas", name:"Camarão com Catupiry", desc:"Mussarela, camarão e catupiry.", prices:{"Único":70} },
  { id:47, category:"Pizzas", name:"Marguerita", desc:"Mussarela, tomate e manjericão.", prices:{"Único":50} },

  { id:48, category:"Pizzas Doces", name:"Romeu e Julieta", desc:"Mussarela, goiabada e parmesão.", prices:{"Único":50} },
  { id:49, category:"Pizzas Doces", name:"Chocolate", desc:"Mussarela e chocolate ao leite.", prices:{"Único":50} },
  { id:50, category:"Pizzas Doces", name:"Banana Imperial", desc:"Mussarela e banana da terra com canela.", prices:{"Único":50} },
  { id:51, category:"Pizzas Doces", name:"Leite Condensado", desc:"Mussarela e leite condensado.", prices:{"Único":50} },
  { id:52, category:"Pizzas Doces", name:"Doce de Leite", desc:"Mussarela e doce de leite.", prices:{"Único":50} }
];

const state = {
  category:"Todos",
  search:"",
  cart:JSON.parse(localStorage.getItem("pastelaria-cart-v2") || "[]")
};

const el = {
  products:document.querySelector("#productsGrid"),
  tabs:document.querySelector("#categoryTabs"),
  search:document.querySelector("#searchInput"),
  cartDrawer:document.querySelector("#cartDrawer"),
  overlay:document.querySelector("#overlay"),
  cartItems:document.querySelector("#cartItems"),
  cartTotal:document.querySelector("#cartTotal"),
  cartCount:document.querySelector("#cartCount"),
  floatingText:document.querySelector("#floatingText"),
  floatingCart:document.querySelector("#floatingCart"),
  deliveryFields:document.querySelector("#deliveryFields"),
  changeFields:document.querySelector("#changeFields"),
  form:document.querySelector("#checkoutForm")
};

function money(value){ return value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}); }
function categories(){ return ["Todos",...new Set(products.map(p=>p.category))]; }

function renderTabs(){
  el.tabs.innerHTML = categories().map(cat=>`
    <button class="${state.category===cat?"active":""}" data-category="${cat}">${cat}</button>
  `).join("");
  el.tabs.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      state.category=btn.dataset.category;
      renderTabs();
      renderProducts();
    });
  });
}

function renderProducts(){
  const term=state.search.trim().toLowerCase();
  const filtered=products.filter(p=>{
    const categoryOk=state.category==="Todos"||p.category===state.category;
    const searchOk=!term||`${p.name} ${p.desc} ${p.category}`.toLowerCase().includes(term);
    return categoryOk&&searchOk;
  });

  if(!filtered.length){
    el.products.innerHTML="<p>Nenhum produto encontrado.</p>";
    return;
  }

  el.products.innerHTML=filtered.map(p=>{
    const sizes=Object.keys(p.prices);
    const first=sizes[0];
    return `
      <article class="product-card ${p.image ? "has-image" : "no-image"}" data-id="${p.id}">
        ${p.image ? `<img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy">` : `<div class="product-placeholder"><span>PASTELARIA<br>& CIA</span></div>`}
        <div class="product-content">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price-row">
          <span class="price" data-price>${money(p.prices[first])}</span>
          ${sizes.length>1?`<select class="size-select" aria-label="Escolher tamanho">${sizes.map(s=>`<option value="${s}">${s}</option>`).join("")}</select>`:""}
          <button class="add-button" type="button">Adicionar</button>
        </div>
        </div>
      </article>
    `;
  }).join("");

  el.products.querySelectorAll(".product-card").forEach(card=>{
    const id=Number(card.dataset.id);
    const product=products.find(p=>p.id===id);
    const select=card.querySelector(".size-select");
    const price=card.querySelector("[data-price]");
    if(select){
      select.addEventListener("change",()=>price.textContent=money(product.prices[select.value]));
    }
    card.querySelector(".add-button").addEventListener("click",()=>{
      const size=select?select.value:Object.keys(product.prices)[0];
      const rules = ADDONS[product.category];
      if (rules && (rules.free.length || rules.paid.length)) {
        openCustomizer(product, size);
      } else {
        addToCart(product,size,[],[],"");
      }
    });
  });
}

function addToCart(product,size,freeAddons=[],paidAddons=[],note=""){
  const addonSignature = [...freeAddons, ...paidAddons.map(a=>a.name)].sort().join("|");
  const noteSignature = note.trim();
  const key=`${product.id}-${size}-${addonSignature}-${noteSignature}`;
  const addonTotal = paidAddons.reduce((sum,a)=>sum+a.price,0);
  const unitPrice = product.prices[size] + addonTotal;
  const existing=state.cart.find(i=>i.key===key);

  if(existing) existing.qty++;
  else state.cart.push({
    key,
    id:product.id,
    name:product.name,
    category:product.category,
    size,
    basePrice:product.prices[size],
    price:unitPrice,
    freeAddons,
    paidAddons,
    note:note.trim(),
    qty:1
  });

  saveCart();
  closeCustomizer();
  openCart();
}

function saveCart(){
  localStorage.setItem("pastelaria-cart-v2",JSON.stringify(state.cart));
  renderCart();
}

function renderCart(){
  const totalQty=state.cart.reduce((s,i)=>s+i.qty,0);
  const subtotal=state.cart.reduce((s,i)=>s+i.price*i.qty,0);
  const delivery=getSelected("delivery");
  const fee=delivery==="Entrega" ? DELIVERY_FEE : 0;
  const total=subtotal+fee;
  el.cartCount.textContent=totalQty;
  el.floatingText.textContent=totalQty?`Sacola (${totalQty}) • ${money(total)}`:"Ver sacola";
  el.floatingCart.classList.toggle("show", totalQty > 0);
  el.cartTotal.textContent=money(total);

  if(!state.cart.length){
    el.cartItems.innerHTML=`
      <div class="empty-cart">
        <div style="font-size:2.4rem">🛍️</div>
        <h3>Sua sacola está vazia</h3>
        <p>Adicione alguns itens do cardápio.</p>
      </div>`;
    return;
  }

  el.cartItems.innerHTML=state.cart.map(item=>`
    <div class="cart-item">
      <div class="cart-item-top">
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">
            ${item.category}${item.size!=="Único"?` • Tam. ${item.size}`:""}
            ${item.freeAddons?.length ? `<br>Grátis: ${item.freeAddons.join(", ")}` : ""}
            ${item.paidAddons?.length ? `<br>Extras: ${item.paidAddons.map(a=>`${a.name} (+${money(a.price)})`).join(", ")}` : ""}
            ${item.note ? `<br>Obs.: ${item.note}` : ""}
          </div>
        </div>
        <strong>${money(item.price*item.qty)}</strong>
      </div>
      <div class="qty-row">
        <button data-action="minus" data-key="${item.key}">−</button>
        <span>${item.qty}</span>
        <button data-action="plus" data-key="${item.key}">+</button>
        <button class="remove" data-action="remove" data-key="${item.key}">Remover</button>
      </div>
    </div>
  `).join("");

  el.cartItems.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>updateCart(btn.dataset.key,btn.dataset.action));
  });
}

function updateCart(key,action){
  const item=state.cart.find(i=>i.key===key);
  if(!item) return;
  if(action==="plus") item.qty++;
  if(action==="minus") item.qty--;
  if(action==="remove"||item.qty<=0) state.cart=state.cart.filter(i=>i.key!==key);
  saveCart();
}

function openCart(){ el.cartDrawer.classList.add("open"); el.overlay.classList.add("show"); }
function closeCart(){ el.cartDrawer.classList.remove("open"); el.overlay.classList.remove("show"); }

function getSelected(name){
  return document.querySelector(`input[name="${name}"]:checked`)?.value || "";
}

function updateConditionalFields(){
  const delivery=getSelected("delivery");
  const payment=getSelected("payment");
  el.deliveryFields.classList.toggle("hidden",delivery!=="Entrega");
  el.changeFields.classList.toggle("hidden",payment!=="Dinheiro");
  renderCart();
}

function validateCheckout(){
  if(!state.cart.length) return "Adicione pelo menos um item à sacola.";

  const name=document.querySelector("#customerName").value.trim();
  if(!name) return "Informe seu nome.";

  const delivery=getSelected("delivery");
  if(delivery==="Entrega"){
    const street=document.querySelector("#street").value.trim();
    const number=document.querySelector("#number").value.trim();
    const district=document.querySelector("#district").value.trim();
    if(!street||!number||!district) return "Preencha rua, número e bairro para entrega.";
  }

  const payment=getSelected("payment");
  if(!payment) return "Escolha a forma de pagamento.";

  return "";
}

function finishOrder(event){
  event.preventDefault();

  const error=validateCheckout();
  if(error){ alert(error); return; }

  const subtotal=state.cart.reduce((s,i)=>s+i.price*i.qty,0);
  const delivery=getSelected("delivery");
  const deliveryFee=delivery==="Entrega" ? DELIVERY_FEE : 0;
  const total=subtotal+deliveryFee;
  const payment=getSelected("payment");
  const name=document.querySelector("#customerName").value.trim();
  const notes=document.querySelector("#notes").value.trim();

  const lines=state.cart.map(item=>{
    const sizeText=item.size!=="Único"?` (${item.size})`:"";
    const details=[];
    if(item.freeAddons?.length) details.push(`  ↳ Grátis: ${item.freeAddons.join(", ")}`);
    if(item.paidAddons?.length) details.push(`  ↳ Extras: ${item.paidAddons.map(a=>`${a.name} (+${money(a.price)})`).join(", ")}`);
    if(item.note) details.push(`  ↳ Obs.: ${item.note}`);
    return [`• ${item.qty}x ${item.name}${sizeText} — ${money(item.price*item.qty)}`,...details].join("\n");
  });

  const message=[
    "🥟 *NOVO PEDIDO — PASTELARIA & CIA*",
    "",
    `👤 Cliente: ${name}`,
    "",
    ...lines,
    "",
    `📦 Tipo: ${delivery}`
  ];

  if(delivery==="Retirada"){
    message.push("📍 Retirada: Rua Durval Campos, São Jorge, nº 528 — Jaguaquara/BA");
  } else {
    const street=document.querySelector("#street").value.trim();
    const number=document.querySelector("#number").value.trim();
    const district=document.querySelector("#district").value.trim();
    const complement=document.querySelector("#complement").value.trim();
    const reference=document.querySelector("#reference").value.trim();

    message.push(`📍 Endereço: ${street}, nº ${number} — ${district}`);
    if(complement) message.push(`🏠 Complemento: ${complement}`);
    if(reference) message.push(`📌 Referência: ${reference}`);
  }

  if(delivery==="Entrega"){
    message.push(`🚚 Taxa de entrega: ${money(deliveryFee)}`);
  }

  message.push("",`💳 Pagamento: ${payment}`);

  if(payment==="Dinheiro"){
    const changeFor=Number(document.querySelector("#changeFor").value);
    if(changeFor>0) message.push(`💵 Troco para: ${money(changeFor)}`);
    else message.push("💵 Troco: não informado");
  }

  if(notes) message.push("",`📝 Observações: ${notes}`);

  message.push("",`🧾 Subtotal: ${money(subtotal)}`);
  if(delivery==="Entrega") message.push(`🚚 Entrega: ${money(deliveryFee)}`);
  message.push(`💰 *TOTAL: ${money(total)}*`);
  message.push("⚠️ Prazo e disponibilidade devem ser confirmados pela loja.");
  message.push("","Pode confirmar meu pedido, por favor?");

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message.join("\n"))}`,"_blank");
}


function openCustomizer(product,size){
  const rules = ADDONS[product.category] || {free:[],paid:[]};
  customizerContext={product,size};

  document.querySelector("#customizerTitle").textContent=product.name;
  document.querySelector("#customizerProductInfo").innerHTML=`
    <strong>${product.category}${size!=="Único"?` • Tam. ${size}`:""}</strong>
    <span>${product.desc}</span>
    <b>Base: ${money(product.prices[size])}</b>
  `;

  const freeWrap=document.querySelector("#freeAddons");
  const paidWrap=document.querySelector("#paidAddons");
  const freeSection=document.querySelector("#freeAddonsSection");
  const paidSection=document.querySelector("#paidAddonsSection");

  freeSection.classList.toggle("hidden",!rules.free.length);
  paidSection.classList.toggle("hidden",!rules.paid.length);

  freeWrap.innerHTML=rules.free.map(name=>`
    <label class="addon-option">
      <input type="checkbox" value="${name}" data-type="free">
      <span><b>${name}</b><small>Grátis</small></span>
    </label>`).join("");

  paidWrap.innerHTML=rules.paid.map(addon=>`
    <label class="addon-option">
      <input type="checkbox" value="${addon.name}" data-price="${addon.price}" data-type="paid">
      <span><b>${addon.name}</b><small>+ ${money(addon.price)}</small></span>
    </label>`).join("");

  document.querySelector("#itemNote").value="";
  document.querySelectorAll('#customizerModal input[type="checkbox"]').forEach(input=>{
    input.addEventListener("change",updateCustomizerTotal);
  });

  updateCustomizerTotal();
  document.querySelector("#customizerModal").classList.add("open");
  document.querySelector("#customizerOverlay").classList.add("show");
}

function closeCustomizer(){
  document.querySelector("#customizerModal").classList.remove("open");
  document.querySelector("#customizerOverlay").classList.remove("show");
  customizerContext=null;
}

function updateCustomizerTotal(){
  if(!customizerContext) return;
  let total=customizerContext.product.prices[customizerContext.size];
  document.querySelectorAll('#customizerModal input[data-type="paid"]:checked').forEach(input=>{
    total+=Number(input.dataset.price);
  });
  document.querySelector("#customizerTotal").textContent=money(total);
}

function confirmCustomizer(){
  if(!customizerContext) return;
  const free=[...document.querySelectorAll('#customizerModal input[data-type="free"]:checked')].map(i=>i.value);
  const paid=[...document.querySelectorAll('#customizerModal input[data-type="paid"]:checked')].map(i=>({
    name:i.value,
    price:Number(i.dataset.price)
  }));
  const note=document.querySelector("#itemNote").value.trim();
  addToCart(customizerContext.product,customizerContext.size,free,paid,note);
}

document.querySelector("#closeCustomizer").addEventListener("click",closeCustomizer);
document.querySelector("#customizerOverlay").addEventListener("click",closeCustomizer);
document.querySelector("#confirmCustomizer").addEventListener("click",confirmCustomizer);

el.search.addEventListener("input",e=>{ state.search=e.target.value; renderProducts(); });
document.querySelector("#openCart").addEventListener("click",openCart);
document.querySelector("#floatingCart").addEventListener("click",openCart);
document.querySelector("#closeCart").addEventListener("click",closeCart);
document.querySelector("#overlay").addEventListener("click",closeCart);
document.querySelectorAll('input[name="delivery"],input[name="payment"]').forEach(i=>i.addEventListener("change",updateConditionalFields));
el.form.addEventListener("submit",finishOrder);

renderTabs();
renderProducts();
renderCart();
updateConditionalFields();
