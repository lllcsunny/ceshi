;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M673.73995 163.499557c38.391443-43.334341 64.321663-103.544921 57.267236-163.499557-55.331667 2.079536-122.324735 34.23237-162.059878 77.518722-35.592067 38.407439-66.705132 99.593801-58.386986 158.460681C572.306558 240.458404 635.300517 206.753916 673.73995 163.499557zM812.269073 544.118721c-1.375693-129.715088 113.638671-191.909225 118.805519-195.044526-64.641592-87.964394-165.355144-100.041702-201.171161-101.417395-85.644911-8.094196-167.178737 46.949535-210.657047 46.949535-43.366334 0-110.471377-45.765799-181.495546-44.59806-93.419178 1.295711-179.511988 50.56473-227.597271 128.419377-97.018376 156.653083-24.826466 388.825334 69.728458 515.980993 46.229696 62.162145 101.337413 132.08256 173.641297 129.523131 69.696465-2.55943 96.0106-41.942651 180.231828-41.942651 84.285214 0 107.911947 41.942651 181.623518 40.64694 74.943296-1.263718 122.452706-63.329884 168.314484-125.715979 53.07617-72.207906 74.911303-142.144317 76.223011-145.663533C958.236538 750.50472 813.772738 698.980204 812.269073 544.118721z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1011.15279 947.362743 762.788396 693.613378C758.683635 689.420554 753.965564 686.246654 748.93859 684.062378 802.297237 612.464792 833.975717 523.081284 833.975717 426.121658 833.975717 190.751188 647.290708 0 416.986294 0 186.68626 0 0.007111 190.751188 0.007111 426.121658 0.007111 661.49066 186.68626 852.243338 416.992153 852.243338 522.689103 852.243338 619.19726 812.058439 692.694578 745.824877 694.723549 749.890385 697.399509 753.709909 700.728429 757.113694L949.034229 1010.857143C966.154361 1028.362009 993.974063 1028.362009 1011.15279 1010.857143 1028.272922 993.358136 1028.272922 964.861692 1011.15279 947.362743L1011.15279 947.362743ZM416.992153 784.992333C223.066769 784.992333 65.813159 624.308416 65.813159 426.121658 65.813159 227.871953 223.066769 67.251006 416.992153 67.251006 610.921919 67.251006 768.163809 227.871953 768.163809 426.121658 768.163809 624.308416 610.921919 784.992333 416.992153 784.992333L416.992153 784.992333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-denghao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M936.202886 352.322277H87.797114c-13.647835 0-24.710798-11.062963-24.710799-24.710798 0-13.646811 11.063987-24.710798 24.710799-24.710798h848.405772c13.647835 0 24.709775 11.063987 24.709775 24.710798 0 13.647835-11.06194 24.710798-24.709775 24.710798zM936.202886 721.099319H87.797114c-13.647835 0-24.710798-11.063987-24.710799-24.709775 0-13.647835 11.063987-24.710798 24.710799-24.710798h848.405772c13.647835 0 24.709775 11.063987 24.709775 24.710798 0 13.645788-11.06194 24.709775-24.709775 24.709775z" fill="#231815" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)