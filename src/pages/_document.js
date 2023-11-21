import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const gtm = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PRRZNVKH');`;

  const ym = `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(95375325, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true
  });`;

  return (
    <Html lang='ru'>
      <Head>
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{ __html: gtm }}
        />
      </Head>
      <body>
        <div style={{ display: 'none' }}>Разработка: @AllSudar</div>
        <Main />
        <NextScript />
        {/* <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-PRRZNVKH'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript> */}
        {/* <script
          type='text/javascript'
          dangerouslySetInnerHTML={{ __html: ym }}
        /> */}
        {/* <noscript>
          <div>
            <img
              src='https://mc.yandex.ru/watch/94470349'
              style={{ position: 'absolute', left: '-9999px' }}
              alt=''
            />
          </div>
        </noscript> */}
      </body>
    </Html>
  );
}
