import React, { useEffect, useMemo, useState } from 'react';
import {
  assets,
  belts,
  ctaByBelt,
  galleryItems,
  navigation,
  products,
  questions,
  resultMessages,
  socialLinks,
} from './data.js';

const WHATSAPP_NUMBER = '5491157462523';
const THEME_STORAGE_KEY = 'ikigai-theme';
const getPageFromHash = () => window.location.hash.replace('#/', '') || 'inicio';
const setPageHash = (page) => { window.location.hash = `/${page}`; };
const parsePrice = (priceStr) => Number(String(priceStr).replace(/[^\d]/g, '')) || 0;
const formatPrice = (value) => `$${value.toLocaleString('es-AR')}`;
const CART_STORAGE_KEY = 'ikigai-cart';
const getInitialCart = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    if (!Array.isArray(stored)) return [];
    return stored.flatMap(({ id, qty }) => {
      const product = products.find((item) => item.id === id);
      const quantity = Math.floor(Number(qty));
      if (!product || !(quantity >= 1)) return [];
      return [{ id: product.id, name: product.name, price: parsePrice(product.price), image: product.image, qty: quantity }];
    });
  } catch {
    return [];
  }
};
const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* localStorage no disponible */
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Header = ({ currentPage, cartCount, theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = (page) => {
    setMenuOpen(false);
    setPageHash(page);
  };

  return (
    <header>
      <div className="container header-content">
        <button className="brand" type="button" onClick={() => handleNavClick('inicio')} aria-label="Ir al inicio">
          <img src={assets.logoImage} alt="Logo Ikigai Dojo" className="logo-img" />
          <span className="logo">IKIGAI DOJO</span>
        </button>
        <nav id="navbar" className={menuOpen ? 'open' : ''} aria-label="Navegación principal">
          {navigation.map((item) => (
            <button className={currentPage === item.page ? 'nav-link active' : 'nav-link'} key={item.page} type="button" onClick={() => handleNavClick(item.page)}>
              {item.label}
            </button>
          ))}
          <button className="nav-link cta-button cta-mobile" type="button" onClick={() => handleNavClick('contacto')}>Inscríbete Ahora</button>
        </nav>
        <div className="header-tools">
          <button className="nav-link cart-link" type="button" onClick={() => handleNavClick('carrito')} aria-label="Ver carrito de compras">
            <i className="fas fa-cart-shopping" aria-hidden="true" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}>
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} aria-hidden="true" />
          </button>
          <button className="nav-link cta-button cta-desktop" type="button" onClick={() => handleNavClick('contacto')}>Inscríbete Ahora</button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="navbar">
            <i className={menuOpen ? 'fas fa-xmark' : 'fas fa-bars'} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer>
    <h3>¡Síguenos!</h3>
    <div className="social-links">
      {socialLinks.map((link) => (
        <a href={link.url} key={link.label} target="_blank" rel="noreferrer" title={link.label}>
          <i className={link.icon} aria-hidden="true" />
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
    <div className="container footer-copy">
      <p>&copy; 2026 IKIGAI DOJO. Todos los derechos reservados.</p>
      <p>Hecho con <i className="fas fa-code" aria-hidden="true" /> y pasión marcial.</p>
    </div>
  </footer>
);

const Hero = () => (
  <section className="hero" style={{ backgroundImage: `url(${assets.homeImage})` }}>
    <div className="hero-overlay" />
    <div className="container hero-content">
      <p className="slogan-disciplina">La disciplina, el respeto y la perseverancia forman campeones dentro y fuera del tatami</p>
      <h2>Descubre una versión nueva y más fuerte de ti</h2>
      <a className="btn btn-primary" href="https://wa.me/5491157462523?text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20clases%20de%20karate!" target="_blank" rel="noreferrer">¡Prueba una Clase Gratis!</a>
    </div>
  </section>
);

const Philosophy = ({ image = assets.homeImage }) => (
  <section id="quienes-somos" className="philosophy-section">
    <div className="container">
      <div className="philosophy-content">
        <div className="text-block">
          <h3>Esencia, Tradición y Pedagogía</h3>
          <p>Nos enorgullece ofrecer una calidad única en nuestro entrenamiento. Nos esforzamos por llevar el karate, el kobudo y la defensa personal a sus raíces como un arte físico y espiritual que representa un estilo de vida armonioso.</p>
          <p>En un mundo lleno de presiones, representamos un oasis de calma y equilibrio. Las artes marciales te brindan herramientas para mantenerte enfocado y presente en situaciones estresantes, tomar mejores decisiones y defenderte cuando sea necesario. En Ikigai Dojo, fomentamos una evolución interna por encima de la apariencia exterior.</p>
        </div>
        <div className="image-block" style={{ backgroundImage: `url(${image})` }} aria-label="Alumnado de Ikigai Dojo" />
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Hola! Soy ${form.name}. ${form.message} Mi correo es ${form.email}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <h2>¿Listo para empezar tu viaje?</h2>
        <p className="subtitle">Contáctanos o visítanos en nuestro Dojo.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Datos de Contacto</h3>
            <p><i className="fas fa-phone" aria-hidden="true" /> Teléfono: +54 9 11 5746-2523</p>
            <p><i className="fas fa-envelope" aria-hidden="true" /> Email: ikigaidojo.razondevivir@gmail.com</p>
            <h3>Ubicación</h3>
            <p><i className="fas fa-map-marker-alt" aria-hidden="true" /> Dirección: Club de Leones San Francisco Solano - Av. 850 N° 2243, San Francisco Solano, Provincia de Buenos Aires, Argentina</p>
            <a href="https://maps.app.goo.gl/QYRv5WD3qHDffkQYA" target="_blank" rel="noreferrer" className="btn btn-secondary">Ver en Google Maps</a>
            <iframe title="Ubicación Ikigai Dojo" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26214.317616002765!2d-58.3278936!3d-34.7860691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32d6bfd30db9d%3A0x19aa36ba77658a70!2sKarate%20Ikigai%20Dojo%20%E2%80%93%20San%20Francisco%20Solano!5e0!3m2!1ses!2sar!4v1775523063970!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className="contact-form">
            <h3>Formulario de Consulta</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Tu Nombre" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Tu Correo Electrónico" value={form.email} onChange={handleChange} required />
              <textarea name="message" placeholder="Tu Mensaje o Consulta" rows="4" value={form.message} onChange={handleChange} required />
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => <><Hero /><Philosophy /><Contact /></>;

const Gallery = () => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (!activeItem) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  return (
    <main className="page-main">
      <section className="gallery-hero" style={{ backgroundImage: `url(${assets.galleryHeroImage})` }}>
        <div className="gallery-hero-overlay" />
        <div className="container gallery-hero-content">
          <h2>Nuestra Galería</h2>
          <p>Momentos de disciplina, esfuerzo y superación en Ikigai Dojo</p>
        </div>
      </section>
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article className="gallery-item" key={`${item.title}-${item.image}`} onClick={() => setActiveItem(item)}>
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay"><span>{item.title}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {activeItem && (
        <div className="lightbox-overlay" onClick={() => setActiveItem(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActiveItem(null)} aria-label="Cerrar imagen">
            <i className="fas fa-xmark" aria-hidden="true" />
          </button>
          <figure className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={activeItem.image} alt={activeItem.title} />
            <figcaption>{activeItem.title}</figcaption>
          </figure>
        </div>
      )}
    </main>
  );
};

const Events = () => (
  <section className="contact-section events-section">
    <div className="container">
      <h2>Próximos Eventos</h2>
      <p className="subtitle">Aquí encontrarás información sobre los próximos eventos que se realizarán en nuestro Dojo.</p>
      <iframe title="Calendario de eventos Ikigai Dojo" src="https://calendar.google.com/calendar/embed?src=ikigaidojo.razondevivir%40gmail.com&ctz=America%2FArgentina%2FBuenos_Aires" loading="lazy" />
    </div>
  </section>
);

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (delta) => {
    setQuantity((current) => Math.max(1, current + delta));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setQuantity(1);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="card text-dark">
      <div className="content-image"><img src={product.image} alt={product.name} className="img-prod" /></div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="centrarbtn">
        <p>Precio: {product.price}</p>
        <div className="product-qty">
          <button type="button" onClick={() => changeQuantity(-1)} aria-label="Restar cantidad">-</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => changeQuantity(1)} aria-label="Sumar cantidad">+</button>
        </div>
        <button className="btn btn-primary" type="button" onClick={handleAddToCart}>
          {added ? 'Agregado ✓' : 'Agregar al carrito'}
        </button>
        <a className="btn btn-secondary" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Me interesa ${product.name}`)}`} target="_blank" rel="noreferrer">Consultar</a>
      </div>
    </article>
  );
};

const Store = ({ onAddToCart }) => (
  <main className="store-page">
    <section className="store-intro">
      <div className="container">
        <h1>Bienvenidos a la tienda</h1>
        <p>Equipamiento seleccionado para entrenar con comodidad, seguridad y espíritu marcial.</p>
      </div>
    </section>
    <h2 className="titulo-productos">Nuestros productos</h2>
    <section className="contenedor-tarjetas">
      {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
    </section>
  </main>
);

const Cart = ({ cart, onUpdateQty, onRemove, onClear }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    const lines = cart.map((item) => `- ${item.qty}x ${item.name} (${formatPrice(item.price)} c/u) = ${formatPrice(item.price * item.qty)}`).join('\n');
    const message = `Hola, quería averiguar por estos productos:\n${lines}\n\nTotal: ${formatPrice(total)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="cart-page">
      <section className="cart-section">
        <div className="container">
          <h1>Tu carrito</h1>
          {cart.length === 0 ? (
            <p className="cart-empty">Todavía no agregaste productos. Visitá la <a href="#/tienda">tienda</a> para empezar.</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>{formatPrice(item.price)} c/u</p>
                    </div>
                    <div className="cart-item-qty">
                      <button type="button" onClick={() => onUpdateQty(item.id, item.qty - 1)} aria-label="Restar cantidad">-</button>
                      <span>{item.qty}</span>
                      <button type="button" onClick={() => onUpdateQty(item.id, item.qty + 1)} aria-label="Sumar cantidad">+</button>
                    </div>
                    <div className="cart-item-subtotal">{formatPrice(item.price * item.qty)}</div>
                    <button className="cart-item-remove" type="button" onClick={() => onRemove(item.id)} aria-label={`Quitar ${item.name}`}>
                      <i className="fas fa-trash" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <div className="cart-actions">
                <button className="btn btn-secondary" type="button" onClick={onClear}>Vaciar carrito</button>
                <button className="btn btn-primary" type="button" onClick={handleCheckout}>Finalizar compra</button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

const getBelt = (points) => belts.reduce((current, belt) => (points >= belt.min ? belt : current), belts[0]);
const getBeltIndex = (points) => belts.reduce((current, belt, index) => (points >= belt.min ? index : current), 0);
const shuffleQuestions = (mode) => [...questions[mode]].sort(() => Math.random() - 0.5).slice(0, 10);

const Trivia = () => {
  const [mode, setMode] = useState('easy');
  const [screen, setScreen] = useState('intro');
  const [gameQuestions, setGameQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const currentQuestion = gameQuestions[currentQ];
  const belt = getBelt(score);
  const beltIndex = getBeltIndex(score);
  const maxScore = Math.max(gameQuestions.length * 20, 200);

  const startGame = () => {
    setGameQuestions(shuffleQuestions(mode));
    setCurrentQ(0);
    setScore(0);
    setSelectedAnswer(null);
    setFeedback(null);
    setScreen('question');
  };
  const selectAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;
    const isCorrect = answerIndex === currentQuestion.correct;
    setSelectedAnswer(answerIndex);
    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) setScore((current) => current + 20);
    window.setTimeout(() => setFeedback(null), 1500);
  };
  const nextQuestion = () => {
    if (currentQ >= gameQuestions.length - 1) {
      setScreen('result');
      return;
    }
    setCurrentQ((current) => current + 1);
    setSelectedAnswer(null);
  };
  const retryGame = () => {
    setScreen('intro');
    setSelectedAnswer(null);
    setFeedback(null);
  };
  const resultCta = ctaByBelt[beltIndex];
  const whatsAppResult = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Hice la trivia del dojo y saqué ${belt.name} con ${score} puntos. Me gustaría saber más sobre las clases!`)}`;

  return (
    <main className="trivia-page" style={{ '--current-belt': belt.color, '--final-belt-color': belt.color }}>
      <div className="bg-texture" />
      <div className="kanji-bg">{belt.kanji}</div>
      <div className={feedback ? `feedback-flash ${feedback}-flash show` : 'feedback-flash'}>{feedback === 'correct' ? 'Correcto +20 pts' : 'Incorrecto'}</div>
      <div className="trivia-container">
        <div className="dojo-header">
          <div className="dojo-logo-text">Ikigai Dojo</div>
          <div className="dojo-title">TRIVIA <span>DOJO</span></div>
          <div className="divider"><div className="divider-line" /><div className="divider-dot" /><div className="divider-line" /></div>
        </div>
        {screen === 'intro' && (
          <section className="screen active">
            <div className="intro-card">
              <div className="intro-kanji">空手</div>
              <div className="intro-subtitle">Poné a prueba tu conocimiento</div>
              <p className="intro-desc">Respondé correctamente y ascendé en el sistema de cinturones. ¿Llegarás al cinturón negro?</p>
              <div className="belt-preview">{belts.map((item) => <div className="belt-chip" key={item.name} style={{ background: item.color }} />)}</div>
              <div className="mode-select">
                <button className={mode === 'easy' ? 'mode-btn selected' : 'mode-btn'} type="button" onClick={() => setMode('easy')}><span className="mode-icon">K</span>PRINCIPIANTE<span className="mode-label">Filosofía e historia básica</span></button>
                <button className={mode === 'hard' ? 'mode-btn selected' : 'mode-btn'} type="button" onClick={() => setMode('hard')}><span className="mode-icon">D</span>AVANZADO<span className="mode-label">Técnicas y competición</span></button>
              </div>
              <button className="trivia-primary" type="button" onClick={startGame}>COMENZAR EL DESAFÍO</button>
            </div>
          </section>
        )}
        {screen === 'question' && currentQuestion && (
          <section className="screen active">
            <div className="progress-bar-wrap">
              <div className="progress-meta"><span className="q-num">Pregunta {currentQ + 1} / {gameQuestions.length}</span><span>{currentQuestion.category}</span></div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: `${(currentQ / gameQuestions.length) * 100}%` }} /></div>
            </div>
            <div className="belt-indicator">
              <div className="belt-bar" style={{ background: belt.color, boxShadow: `0 0 10px ${belt.color}` }} />
              <div className="belt-name"><strong>{belt.name}</strong></div>
              <div className="score-badge">{score} pts</div>
            </div>
            <div className="question-card"><div className="question-category">{currentQuestion.category}</div><div className="question-text">{currentQuestion.text}</div></div>
            <div className="options-grid">
              {currentQuestion.options.map((option, index) => {
                const isAnswered = selectedAnswer !== null;
                const answerClass = isAnswered && index === currentQuestion.correct ? ' correct' : isAnswered && index === selectedAnswer ? ' wrong' : '';
                return <button className={`option-btn${answerClass}`} key={option} type="button" disabled={isAnswered} onClick={() => selectAnswer(index)}><span className="option-letter">{String.fromCharCode(65 + index)}</span>{option}</button>;
              })}
            </div>
            <div className={selectedAnswer !== null ? 'explanation-box visible' : 'explanation-box'}>{currentQuestion.explanation}</div>
            <button className={selectedAnswer !== null ? 'next-btn visible' : 'next-btn'} type="button" onClick={nextQuestion}>{currentQ < gameQuestions.length - 1 ? 'SIGUIENTE PREGUNTA' : 'VER MI RESULTADO'}</button>
          </section>
        )}
        {screen === 'result' && (
          <section className="screen active">
            <div className="result-card">
              <div className="result-belt-display" style={{ borderColor: belt.color, boxShadow: `0 0 40px ${belt.color}` }}>{belt.emoji}</div>
              <div className="result-rank-label">TU RANGO FINAL</div>
              <div className="result-belt-name" style={{ color: belt.color, textShadow: `0 0 30px ${belt.color}` }}>{belt.name}</div>
              <div className="stars-row">{belts.map((item, index) => <span className={index <= beltIndex ? 'star lit' : 'star'} key={item.name} style={{ color: index <= beltIndex ? belt.color : '#333' }}>★</span>)}</div>
              <div className="result-score">{score}</div>
              <div className="result-score-label">puntos de {maxScore}</div>
              <div className="result-message">{resultMessages[beltIndex]}</div>
              <div className="cta-box"><p>{resultCta.text}</p><a className="btn-whatsapp" href={whatsAppResult} target="_blank" rel="noreferrer">{resultCta.label}</a></div>
              <button className="btn-retry" type="button" onClick={retryGame}>JUGAR DE NUEVO</button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

const Page = ({ currentPage, cart, onAddToCart, onUpdateQty, onRemove, onClear }) => {
  const pages = useMemo(() => ({
    inicio: <Home />,
    galeria: <Gallery />,
    nosotros: <Philosophy image={assets.alumnadoImage} />,
    contacto: <Contact />,
    eventos: <Events />,
    tienda: <Store onAddToCart={onAddToCart} />,
    carrito: <Cart cart={cart} onUpdateQty={onUpdateQty} onRemove={onRemove} onClear={onClear} />,
    trivia: <Trivia />,
  }), [cart, onAddToCart, onUpdateQty, onRemove, onClear]);
  return pages[currentPage] || pages.inicio;
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(getPageFromHash());
  const [cart, setCart] = useState(getInitialCart);
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    const handleHashChange = () => { setCurrentPage(getPageFromHash()); };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* localStorage no disponible */
    }
  }, [theme]);
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart.map(({ id, qty }) => ({ id, qty }))));
    } catch {
      /* localStorage no disponible */
    }
  }, [cart]);
  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  const addToCart = (product, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => (item.id === product.id ? { ...item, qty: item.qty + quantity } : item));
      }
      return [...current, { id: product.id, name: product.name, price: parsePrice(product.price), image: product.image, qty: quantity }];
    });
  };
  const updateQty = (id, qty) => {
    if (qty < 1) {
      setCart((current) => current.filter((item) => item.id !== id));
      return;
    }
    setCart((current) => current.map((item) => (item.id === id ? { ...item, qty } : item)));
  };
  const removeFromCart = (id) => setCart((current) => current.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="app-shell">
      <Header currentPage={currentPage} cartCount={cartCount} theme={theme} onToggleTheme={toggleTheme} />
      <Page currentPage={currentPage} cart={cart} onAddToCart={addToCart} onUpdateQty={updateQty} onRemove={removeFromCart} onClear={clearCart} />
      <Footer />
    </div>
  );
};

export default App;

