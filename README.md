<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio di Antonio Lo Sapio</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f5f5f5;
      color: #333;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #4f46e5;
      color: white;
      padding: 2rem 1rem;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2.5rem;
    }
    header p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
    main {
      max-width: 900px;
      margin: 2rem auto;
      padding: 1rem;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    section {
      margin-bottom: 2rem;
    }
    section h2 {
      color: #4f46e5;
      margin-bottom: 0.5rem;
      border-bottom: 2px solid #4f46e5;
      display: inline-block;
      padding-bottom: 0.25rem;
    }
    ul {
      list-style: disc;
      padding-left: 1.5rem;
    }
    a {
      color: #4f46e5;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    footer {
      text-align: center;
      padding: 1.5rem;
      font-size: 0.9rem;
      color: #666;
    }
  </style>
</head>
<body>
  <header>
    <h1>Portfolio di Antonio Lo Sapio</h1>
    <p>Un portfolio moderno realizzato con React e Next.js</p>
  </header>
  <main>
    <section>
      <h2>Descrizione</h2>
      <p>Questo progetto è il portfolio personale di Antonio Lo Sapio. Mostra le competenze, i progetti e i contatti in un'interfaccia elegante e reattiva, realizzata con React, Next.js e TailwindCSS.</p>
    </section>

    <section>
      <h2>Funzionalità principali</h2>
      <ul>
        <li>Sezioni About, Skills, Projects e Contact</li>
        <li>Animazioni interattive con Lottie e Marquee</li>
        <li>Form di contatto con EmailJS e ReCaptcha</li>
        <li>Integrazione con React Icons e React Toastify per notifiche</li>
        <li>Responsive design ottimizzato per desktop e mobile</li>
      </ul>
    </section>

    <section>
      <h2>Tecnologie utilizzate</h2>
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>TailwindCSS</li>
        <li>SASS / PostCSS</li>
        <li>Axios</li>
        <li>Sharp (ottimizzazione immagini)</li>
      </ul>
    </section>

    <section>
      <h2>Come eseguire il progetto</h2>
      <ol>
        <li>Clona il repository: <code>git clone https://github.com/ALoSapio93/portfolio.git</code></li>
        <li>Installa le dipendenze: <code>npm install</code></li>
        <li>Avvia il progetto in locale: <code>npm run dev</code></li>
        <li>Apri il browser su <a href="http://localhost:3000">http://localhost:3000</a></li>
      </ol>
    </section>

    <section>
      <h2>Deployment</h2>
      <p>Il progetto è ospitato su <a href="https://portfolio-mbou.vercel.app" target="_blank">Vercel</a> per il deploy automatico. Ogni push su GitHub aggiorna automaticamente il sito live.</p>
    </section>

  </main>
  <footer>
    &copy; 2025 Antonio Lo Sapio. Tutti i diritti riservati.
  </footer>
</body>
</html>
