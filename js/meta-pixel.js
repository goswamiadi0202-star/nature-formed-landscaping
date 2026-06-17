/* Meta Pixel — Nature Formed Landscaping
 * Loads fbevents.js, initializes the pixel, and tracks PageView on every page.
 * The Pixel ID lives here ONLY — update it in this one file.
 * The Lead conversion event is fired separately on thanks.html (post-form-submit). */
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1935386117112218');
fbq('track', 'PageView');
