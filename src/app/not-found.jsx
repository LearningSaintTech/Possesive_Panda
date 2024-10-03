import Link from 'next/link';
import Image from 'next/image';
import not_found from "../assets/not-found/not_found.jpeg";
import Footer from './(Components)/Footer';
export default function Custom404() {
  return (
    <div>
      <head>
      <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,t,r,u) {
          var f,n,i;
          w[u]=w[u]||[],f=function() {
            var o={ti:"187153115",enableAutoSpaTracking:true};
            o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
          },
          n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {
            var s=this.readyState;
            s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
          },
          i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
        })(window,document,"script","//bat.bing.com/bat.js","uetq");
      `,
    }}
  />
      </head>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#040104] text-white mt-8 mb-8">
    
      <Image
        src={not_found}
        alt="Page Not Found"
        height={350}
        width={550}
        className="mt-2 mb-4 rounded-lg shadow-lg" 
      />
      <h1 className="text-2xl font-bold mb-4">Oops! The page you are looking for does not exist.</h1>
      
      <Link href="/" className="px-6 py-3 bg-[#60E2FF] text-white rounded-lg hover:bg-[#00AFF1] transition-all duration-300">
       
          Go back to Home
       
      </Link>
</div>
      <Footer/>
    </div>
  );
};

