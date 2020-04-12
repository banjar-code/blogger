(function () {
        var options = {
            whatsapp: &quot;+6282377754543&quot;, // WhatsApp number
            call_to_action: &quot;Hubungi Kang Yusuf&quot;, // Call to action
            position: &quot;left&quot;, // Position may be &#39;right&#39; or &#39;left&#39;
        };
        var proto = document.location.protocol, host = &quot;getbutton.io&quot;, url = proto + &quot;//static.&quot; + host;
        var s = document.createElement(&#39;script&#39;); s.type = &#39;text/javascript&#39;; s.async = true; s.src = url + &#39;/widget-send-button/js/init.js&#39;;
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName(&#39;script&#39;)[0]; x.parentNode.insertBefore(s, x);
    })();
