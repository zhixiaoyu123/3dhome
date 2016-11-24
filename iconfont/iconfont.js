;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-Iconfont" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M883.55 422.1333c9.6333 187.7333-99.55 303.8333-241.6 356.6667-27.4333 10.2167-64.3167 40.0667-82.3833 67.5167-31.9333 48.2667-37.5667 97.9833-57.65 97.9833-20.45 0-22.4667-40.5667-58.6167-99.7333-15.0833-24.9-61.9-56.6333-87.7167-65.1C213.0833 733.2 106.1667 600.4833 116.5667 422.1333 128.8833 210.55 306.1 55.7 500.1 55.7 697.9667 55.7 872.45 201.6 883.55 422.1333zM280.35 328.9c-61.6167 0-111.4 49.8333-111.4 111.4667 0 61.4833 49.7667 111.2667 111.4 111.2667 61.4333 0 111.4167-49.7667 111.4167-111.2667C391.7667 378.75 341.7833 328.9 280.35 328.9zM718.15 330.7c-61.1 0-110.6833 49.4833-110.6833 110.4833 0 61.1333 49.5833 110.45 110.6833 110.45 60.9667 0 110.55-49.3167 110.55-110.45C828.7 380.1833 779.1167 330.7 718.15 330.7zM483.6833 558.2333c-23.6 4.3667-51.7833 40.6333-51.7833 71.9333 0 28.3167 31.4833 35.6167 47 27.6333 16.5333-8.5667 16.6-33.3333 18.2333-51.7833C498.7833 587.2 501.2167 554.8833 483.6833 558.2333zM512.4667 606.0167c1.6667 18.45 3.25 43.2333 19.7333 51.7833 15.5167 7.9833 46.9833 0.6833 46.9833-27.6333 0-31.3167-28.2833-67.5833-51.9167-71.9333C509.55 554.8833 510.7167 587.2 512.4667 606.0167z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-svn" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M942.831 285.229c-37.273-61.13-115.434-81.058-182.254-42.479-93.88 54.195-36.308 199.067-114.628 258.022-0.307-56.092-18.599-107.419-50.262-147.311-40.281-50.749-102.203-82.99-176.264-82.99-75.164 0-134.378 39.775-172.862 99.248-29.242 45.19-46.515 101.753-49.722 160.88C142.363 547.801 94.866 509.522 67.1 468.849c-26.252 161.418 122.164 155.59 146.504 158.085 21.155 2.175-41.255 136.898-5.067 160.589 28.921 18.93 121.396 17.054 140.401-0.22 23.316-21.195 7.238-85.528-3.753-143.396 72.098 3.014 95.344 4.211 167.082-3.123-7.835 76.268-35.281 128.517-0.269 148.544 23.784 13.602 122.163 12.364 146.733-12.573 24.122-24.478-31.578-134.305-4.52-155.23 111.152-85.967 109.719-150.201 155.126-176.495 31.15-18.042 98.986 5.329 134.896-40.673C968.367 373.441 962.294 317.151 942.831 285.229z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-nodejs1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M227.652 329.868c0-4.363-2.235-8.366-5.902-10.524l-97.786-57.716c-1.655-0.995-3.511-1.515-5.387-1.588l-1.012 0c-1.869 0.073-3.718 0.593-5.398 1.588l-97.791 57.716c-3.646 2.156-5.911 6.159-5.911 10.524l0.215 155.39c0 2.164 1.095 4.18 2.947 5.232 1.815 1.118 4.061 1.118 5.868 0l58.114-34.125c3.678-2.241 5.913-6.189 5.913-10.515l0-72.587c0-4.328 2.232-8.342 5.897-10.488l24.747-14.612c1.845-1.104 3.862-1.639 5.922-1.639 2.014 0 4.082 0.529 5.875 1.639l24.734 14.612c3.662 2.146 5.905 6.16 5.905 10.488l0 72.587c0 4.326 2.267 8.307 5.918 10.515l58.101 34.125c1.826 1.118 4.101 1.118 5.908 0 1.799-1.052 2.934-3.069 2.934-5.232L227.652 329.868"  ></path>'+
      ''+
      '<path d="M685.618 410.781c0 1.082-0.568 2.077-1.482 2.622l-33.586 19.842c-0.915 0.54-2.032 0.54-2.945 0l-33.593-19.842c-0.916-0.545-1.475-1.543-1.475-2.622l0-39.778c0-1.082 0.559-2.079 1.471-2.616l33.59-19.895c0.92-0.542 2.037-0.542 2.96 0l33.578 19.895c0.914 0.537 1.482 1.537 1.482 2.616L685.618 410.781M694.694 116.26c-1.834-1.049-4.063-1.025-5.877 0.063-1.799 1.088-2.903 3.074-2.903 5.221L685.914 275.43c0 1.509-0.797 2.916-2.065 3.67-1.278 0.763-2.856 0.763-4.143 0l-24.485-14.465c-3.659-2.169-8.156-2.161-11.802 0l-97.828 57.893c-3.657 2.163-5.911 6.154-5.911 10.486l0 115.813c0 4.328 2.254 8.321 5.907 10.496L643.4 517.26c3.662 2.169 8.166 2.169 11.817 0l97.843-57.937c3.653-2.172 5.904-6.167 5.904-10.496L758.964 160.141c0-4.385-2.312-8.435-6.057-10.574L694.694 116.26z"  ></path>'+
      ''+
      '<path d="M1017.118 369.973c3.648-2.173 5.881-6.159 5.881-10.481l0-28.065c0-4.319-2.232-8.31-5.881-10.476l-97.196-57.871c-3.652-2.18-8.175-2.18-11.837-0.016l-97.794 57.892c-3.659 2.167-5.902 6.16-5.902 10.493l0 115.775c0 4.355 2.28 8.372 5.962 10.525l97.184 56.787c3.581 2.104 7.984 2.117 11.577 0.067l58.786-33.504c1.873-1.066 3.031-3.072 3.039-5.252 0.014-2.185-1.115-4.201-2.963-5.295l-98.407-57.923c-1.847-1.076-2.977-3.085-2.977-5.254l0-36.287c0-2.152 1.124-4.164 2.958-5.244l30.632-18.111c1.82-1.077 4.067-1.077 5.894 0l30.646 18.111c1.827 1.08 2.957 3.089 2.957 5.244l0 28.548c0 2.169 1.13 4.167 2.961 5.259 1.831 1.073 4.085 1.066 5.913-0.019L1017.118 369.973"  ></path>'+
      ''+
      '<path d="M377.973 262.453c3.651-2.158 8.158-2.158 11.81 0l97.815 57.882c3.66 2.165 5.911 6.162 5.911 10.496l0 115.856c0 4.328-2.251 8.32-5.902 10.497l-97.818 57.929c-3.657 2.166-8.161 2.166-11.815 0l-97.792-57.929c-3.654-2.174-5.905-6.169-5.905-10.497L274.277 330.824c0-4.328 2.251-8.323 5.91-10.489L377.973 262.453"  ></path>'+
      ''+
      '<path d="M913.694 418.7 888.427 403.741 888.427 373.823 913.694 358.865 938.961 373.823 938.961 403.741Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-bike" viewBox="0 0 1216 1024">'+
      ''+
      '<path d="M959.936 902.304c-134.784 0-244.064-109.248-244.064-244.064 0-98.88 58.944-183.84 143.488-222.176l-32.448-73.056 5.28 12.768-222.208 298.272 0 59.808 32.544 0 0 32.576-97.664 0 0-32.576 32.576 0 0-32.576-92.064-8.64c-16.768 118.432-118.272 209.632-241.344 209.632-134.784 0.032-244.032-109.216-244.032-244.032 0-134.784 109.248-244.032 244.064-244.032 35.232 0 68.64 7.616 98.88 21.024l60.992-153.216-27.68-77.312c-12.16 0-23.488 0-32.544 0-30.528 0-22.368-32.544-22.368-32.544s2.016-28.48 24.416-28.48 22.368 20.352 58.976 20.352c35.04 0 85.408 10.144 85.408 10.144s22.368 30.496-20.32 30.496c-19.328 0-40.608 0-61.024 0l23.136 83.104 353.664 0-27.776-63.136-21.6 0 0-32.512 130.144 0 0 32.544-73.536 0 95.264 200.32c22.72-7.008 46.88-10.784 71.872-10.784 134.784 0 244.064 109.248 244.064 244.032-0.032 134.816-109.312 244.064-244.096 244.064zM244.064 446.72c-116.832 0-211.52 94.688-211.52 211.52s94.688 211.488 211.52 211.488c106.208 0 193.92-78.368 208.96-180.448l-169.408-17.44c-2.688 15.264-15.392 27.072-31.424 27.072-17.984 0-32.544-14.56-32.544-32.576 0-17.952 14.56-32.576 32.544-32.576 3.84 0 7.424 0.992 10.848 2.24l67.872-170.56c-26.528-11.904-55.872-18.72-86.848-18.72zM292.864 644l162.528 17.184c0.032-0.992 0.16-1.952 0.16-2.944 0-75.2-39.328-141.056-98.464-178.592l-64.224 164.352zM418.464 322.624l-49.376 126.336c71.2 42.624 119.008 120.288 119.008 209.312 0 2.112-0.256 4.256-0.32 6.368l55.232 5.824-124.544-347.84zM799.296 300.672l0 19.648-355.84 0 129.6 346.848 245.984-322.08-19.744-44.416zM959.936 446.72c-20.384 0-40.032 3.04-58.688 8.448l75.968 173.568c15.424 2.496 27.456 15.36 27.456 31.488 0 17.984-14.56 32.576-32.544 32.576s-32.576-14.56-32.576-32.576c0-8.736 3.552-16.672 9.248-22.56l-76.288-171.904c-73.184 33.28-124.128 106.816-124.128 192.448 0 116.8 94.688 211.488 211.488 211.488s211.488-94.688 211.488-211.488-94.624-211.488-211.424-211.488z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jquery" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M818.718125 747.844449c24.190959-13.047154 40.286542-34.269501 66.11479-42.496883-69.390393 102.360296-137.041166 182.977381-283.343253 193.608509-119.071909 8.65717-224.851071-38.507012-297.516044-89.723487-18.368346-12.9438-40.093137-26.698059-51.943023-37.780465-4.031826-3.765767-0.859577-14.899338-4.727675-18.890232-17.365506-17.897625-54.143131-48.504714-70.833255-75.550697-7.858992-12.728906-11.768021-32.244378-18.890232-47.225581-30.944779-65.112973-54.716182-183.989431-23.607674-273.898137 8.084119-23.382547 28.488845-46.672996 42.497906-66.115813 14.479783-20.107967 29.829376-37.176714 42.497906-61.388139-3.213181 51.29834-23.791869 83.440387-18.890232 151.111626 11.757788 162.285107 120.064516 285.226137 236.127905 354.176508 2.619664 1.565658 12.218276-2.210341 14.162558 0 7.930623 9.015328 26.738991 18.061354 56.670697 28.335349C596.66068 792.798291 737.487056 791.631722 818.718125 747.844449z"  ></path>'+
      ''+
      '<path d="M884.833939 502.281661c-33.861202 75.509764-102.125959 145.473209-236.127905 136.949069-179.191148-11.399631-355.803565-210.524784-278.615579-391.956973 7.091512-16.679891 21.960151-31.630395 33.05279-47.225581 10.417257-14.643512 20.077268-32.520671 37.780465-42.508139-77.095889 160.024623 61.429071 325.749062 184.17465 377.794415C698.878736 566.627155 838.662363 549.937031 884.833939 502.281661z"  ></path>'+
      ''+
      '<path d="M596.763011 171.712827c1.524726 135.864364 166.737512 237.826594 297.516044 170.001859-38.281885 98.749048-188.748828 101.522208-273.90837 28.335349-71.273277-61.265342-86.878696-175.537945-18.879999-250.28023C614.50714 139.550313 596.558349 153.129586 596.763011 171.712827z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-css3" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M157.110857 73.142857l860.013714 0-151.990857 761.709714-459.410286 152.576-398.848-152.576 40.594286-203.410286 169.691429 0-16.603429 83.968 241.152 92.013714 277.723429-92.013714 38.838857-193.682286-690.322286 0 33.133714-169.691429 690.834286 0 21.723429-109.129143-690.322286 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-html51" viewBox="0 0 1050 1024">'+
      ''+
      '<path d="M662.133094 528.533238 650.067803 663.859659 533.786404 695.263857 533.522368 695.362583 417.270816 664.008897 409.854852 580.686063 305.030314 580.686063 319.634942 744.615605 533.494816 803.954798 533.641758 803.954798 533.751964 803.954798 533.988448 803.901991 747.618726 744.615605 776.304502 424.142637 395.824215 424.142637 386.305148 317.247139 785.421776 317.247139 785.80061 317.247139 795.126816 212.854242 272.184251 212.854242 300.355731 528.533238Z"  ></path>'+
      ''+
      '<path d="M116.680897 35.518565l75.840287 851.221812 340.585614 94.559283 341.497112-94.710816L950.639354 35.518565 116.680897 35.518565zM810.681973 815.682583 533.210117 892.624933l-276.71878-76.827552L194.856179 124.181812l677.601004 0L810.681973 815.682583z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-css31" viewBox="0 0 1050 1024">'+
      ''+
      '<path d="M545.447605 329.521363 346.557417 431.000682 288.754224 460.448717 295.733955 532.48 624.160143 532.48 611.789489 659.306762 513.115839 684.688646 424.565094 659.306762 414.302135 583.211623 300.775892 583.211623 315.552717 735.417973 513.049256 786.149596 710.543498 735.417973 740.099444 431.000682 562.419372 431.000682 749.519785 334.868664 759.91591 228.042045 266.180305 228.042045 276.071318 329.521363Z"  ></path>'+
      ''+
      '<path d="M119.351103 60.618045l71.608825 803.693058 321.570439 89.280861 322.431426-89.423211 71.790206-803.548413L119.351103 60.620341zM774.607785 797.223031l-261.983283 72.648897-261.264646-72.538691L193.164054 144.331193l639.768108 0L774.607785 797.223031z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-php" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M232.367543 403.6096 158.165577 403.6096l-30.471314 185.049234 69.342354 0c0 0 84.361509 2.610469 88.33536-119.888457C289.345097 398.401829 232.367543 403.6096 232.367543 403.6096L232.367543 403.6096zM865.741531 403.6096l-74.200503 0-30.472046 185.049234 69.341623 0c0 0 84.36224 2.610469 88.336091-119.888457C922.719817 398.401829 865.741531 403.6096 865.741531 403.6096L865.741531 403.6096zM193.498697 657.46944l-75.078949-0.6912-21.204114 116.411977L16.833829 773.190217l72.434834-437.86752c0 0 102.90688 1.563794 170.485029 0 67.575223-1.565257 134.03136 54.78912 102.913463 182.443886C325.561783 669.980526 193.498697 657.46944 193.498697 657.46944L193.498697 657.46944zM554.796617 657.46944c0 0 19.296549-101.753417 27.747474-172.403566 3.47648-29.083063 18.632411-78.328686-21.531794-78.442057-33.639863-0.101669-83.946789-0.411063-83.946789-0.411063l-42.405303 251.263269L355.155383 657.476023l74.208549-439.962331 81.408731 0-20.458057 117.774629 83.919726 0c0 0 111.304411-10.389943 98.054583 98.035566-13.256411 108.424046-37.988937 224.152137-37.988937 224.152137L554.796617 657.476023 554.796617 657.46944zM996.041143 517.765851c-37.103909 152.213943-169.161874 139.702857-169.161874 139.702857l-75.086263-0.6912-21.203383 116.411977L650.207086 773.189486l72.435566-437.86752c0 0 102.907611 1.563794 170.484297 0C960.702903 333.756709 1027.157577 390.111086 996.041143 517.765851L996.041143 517.765851zM996.041143 517.765851"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-nodejs" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 78.933333C500.48 78.933333 488.533333 81.92 478.72 87.466667L161.28 270.933333C140.8 282.88 128 305.066667 128 328.96L128 695.04C128 718.933333 140.8 741.12 161.28 753.066667L244.48 800.853333C285.013333 820.48 298.666667 820.906667 317.44 820.906667 377.173333 820.906667 411.733333 784.64 411.733333 721.493333L411.733333 360.106667C411.733333 354.986667 407.466667 350.72 402.346667 350.72L362.666667 350.72C357.12 350.72 352.853333 354.986667 352.853333 360.106667L352.853333 721.493333C352.853333 749.653333 323.84 777.386667 277.333333 753.92L189.866667 704C186.88 701.866667 185.173333 698.453333 185.173333 695.04L185.173333 328.96C185.173333 325.12 186.88 321.706667 189.866667 320L507.306667 136.96C509.866667 135.253333 514.133333 135.253333 516.693333 136.96L834.133333 320C837.12 321.706667 838.826667 325.12 838.826667 328.96L838.826667 695.04C838.826667 698.453333 837.12 701.866667 834.133333 704L516.693333 887.04C514.133333 888.746667 509.866667 888.746667 506.88 887.04L426.666667 838.4C423.253333 837.12 419.84 836.693333 417.706667 837.973333 395.093333 850.773333 390.826667 853.333333 369.92 859.733333 364.8 861.44 356.693333 864.426667 372.906667 873.386667L478.72 936.106667C488.96 942.08 500.053333 945.066667 512 945.066667 523.946667 945.066667 535.04 942.08 545.28 936.106667L862.72 753.066667C883.2 741.12 896 718.933333 896 695.04L896 328.96C896 305.066667 883.2 282.88 862.72 270.933333L545.28 87.466667C535.466667 81.92 523.946667 78.933333 512 78.933333M597.333333 341.333333C506.88 341.333333 452.693333 379.306667 452.693333 443.306667 452.693333 512 506.453333 532.053333 593.493333 540.586667 697.173333 550.826667 705.28 566.186667 705.28 586.666667 705.28 622.08 676.693333 637.013333 610.133333 637.013333 525.653333 637.013333 507.733333 616.106667 501.333333 574.293333 500.48 570.026667 496.64 566.613333 491.946667 566.613333L450.986667 566.613333C445.866667 566.613333 442.026667 570.453333 442.026667 576 442.026667 628.906667 471.04 692.906667 610.133333 692.906667 710.4 692.906667 768 653.226667 768 584.106667 768 515.413333 721.92 497.493333 624.213333 484.266667 525.653333 471.466667 515.84 464.64 515.84 441.6 515.84 422.4 524.373333 396.8 597.333333 396.8 661.333333 396.8 686.506667 410.88 696.32 454.826667 697.173333 459.093333 701.013333 462.08 705.28 462.08L746.666667 462.08C748.8 462.08 751.36 461.226667 753.066667 459.093333 754.773333 457.386667 756.053333 454.826667 755.2 452.266667 749.226667 376.32 698.88 341.333333 597.333333 341.333333Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ajax" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M132.857 387.309h68.007l95.811 259.134h-69.5l-15.885-46.663h-89.359l-16.382 46.663h-68.506l95.811-259.134zM136.826 550.134h58.083l-28.297-90.845h-0.494l-29.289 90.845z"  ></path>'+
      ''+
      '<path d="M338.872 577.935c0 0 7.94 19.361 24.325 19.361 15.39 0 23.828-12.412 23.828-37.232v-172.756h66.522v177.22c0 58.083-29.289 86.875-89.853 87.375-37.73 0-59.072-23.828-63.543-35.745l38.72-38.228z"  ></path>'+
      ''+
      '<path d="M548.363 387.309h68.007l95.811 259.134h-69.5l-15.885-46.663h-89.359l-16.382 46.663h-68.506l95.811-259.134zM552.331 550.134h58.083l-28.297-90.845h-0.494l-29.289 90.845z"  ></path>'+
      ''+
      '<path d="M816.431 510.42l-83.893-123.109h78.433l43.189 80.918 45.67-80.918h75.956l-82.903 123.109 90.845 136.022h-81.415l-48.155-86.375-52.126 86.375h-76.947z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-js" viewBox="0 0 1026 1024">'+
      ''+
      '<path d="M447.433 193.535h-124.196v396.691c0 97.968-27.84 125.808-76.55 125.808-23.017 0-43.36-4.817-59.425-11.245l-12.847 116.175c23.017 9.635 57.822 14.992 85.122 14.992 111.349 0 187.372-63.173 187.372-244.653v-397.757h0.543zM697.977 194.066c-117.243 0-191.117 80.3-191.117 186.299 0 91.006 57.283 148.289 140.263 185.229 59.954 25.695 83.52 48.714 83.52 86.725 0 41.221-27.303 67.99-79.23 67.99-48.182 0-92.081-19.276-121.52-38.541v0l-23.017 115.099c28.372 19.276 80.838 38.541 137.585 38.541 137.044 0 200.756-88.336 200.756-192.723 0-88.336-40.686-145.616-129.021-186.299-65.311-31.587-92.613-48.714-92.613-88.336 0-31.587 23.553-59.954 72.8-59.954 48.182 0 81.374 19.276 100.642 31.587l28.909-116.699c-30.513-16.061-71.732-28.909-127.947-28.909v0 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-06" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M322.777111 559.164835l94.611444 217.609934c0 0-75.284555-85.023862-104.076201-160.843068 0 0-10.302858-29.709222-18.922289 0-9.862132 23.524617-17.072688 79.496733-18.922289 113.533733 0 0-72.278953 27.62842-94.611444-104.068976-22.332491-131.690171 15.627686-198.59372 18.922289-208.145177S127.355168 389.55061 114.631934 237.485924c0 0-2.384252-9.471982-18.922289-28.379821-16.538037-18.915064-76.440556-73.066479-75.69638-113.533733 0.751401-40.47448 13.25066-62.662471 56.766867-75.689155 55.690341-0.859776 125.996867 58.052918 141.920779 75.689155 15.923912 13.06281 95.78912-41.731631 255.454512 104.076201 137.275101 104.928752 221.395837 340.825175 236.524998 387.903309 15.158061 47.107035 8.720581 69.150526 104.068976 94.618669 50.856812 19.97714 152.772737 101.301799 170.3006 141.920779 0 0-170.25725-14.17546-179.765357 18.922289-1.495576 10.122232-0.997051 15.078586 28.387046 37.844578 29.384097 22.780442 170.3006 132.456022 170.3006 132.456022s-165.828321-75.898681-227.067466-160.843068c0 0-29.716447-30.749623 9.464757-47.309335 39.173979-16.538037 85.146687-28.387046 85.146687-28.387046s-80.775559-59.707444-160.843068-75.689155C658.985508 671.925492 651.240302 604.920793 634.99849 578.087123S517.599379 262.180992 313.319579 180.719057c0 0-43.639032-25.338094-104.076201-18.922289 0 0-20.90194 0.5202-66.231624-37.844578 0 0-36.493502-28.206421-18.922289 0 17.578438 28.206421 56.485091 69.006026 66.231624 132.456022s43.617357 99.401623 56.766867 122.99849 21.660566 18.423763 9.464757 56.766867-50.632837 108.70743-28.387046 217.609934c0 0 50.177662-92.711268 66.231624-113.540958C294.397291 540.235321 314.453905 533.602766 322.777111 559.164835z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-socialjavascript" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M416 176.002l-160 0 0 424.996c0 105.16-36.064 134.522-98.824 134.522-29.41 0-55.896-5.042-76.5-12.126L64 847.808c29.4 10.124 74.518 16.192 109.814 16.192C317.91 864 416 796.258 416 602.04L416 176.002 416 176.002z"  ></path>'+
      ''+
      '<path d="M764.926 160C610.04 160 512 247.996 512 364.308c0 100.166 75.502 162.88 185.282 203.33 79.4 28.316 110.784 53.616 110.784 95.078 0 45.512-36.278 74.85-104.896 74.85-63.726 0-121.578-21.28-160.788-42.51l0-0.042L512 821.454c37.278 21.276 106.882 42.51 182.334 42.51C875.708 863.96 960 766.86 960 652.568c0-97.1-53.916-159.8-170.556-204.326-86.278-34.382-122.54-53.59-122.54-97.084 0-34.4 31.376-65.738 96.086-65.738 63.692 0 107.488 21.414 133.01 34.582l38.25-128C894.25 174.44 840.376 160 764.926 160L764.926 160z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-github-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 61.653c-251.413 0-455.893 204.48-455.893 455.893 0 207.893 140.693 389.227 342.293 441.067l11.733 2.987c5.867 1.493 12.267 0.427 17.28-3.093 5.013-3.413 8.32-8.96 9.067-15.040l1.173-10.027c0.64-2.773 0.96-5.547 0.96-8.32v-90.773c0-5.973-2.453-11.627-6.827-15.68-1.813-1.707-3.84-2.987-6.080-3.947 6.827-2.987 11.627-9.387 12.587-16.853l0.853-6.72c2.133-17.28 7.36-29.44 15.573-36.16l18.347-15.040c6.507-5.333 9.28-13.973 7.040-22.080-2.133-8.107-8.96-14.187-17.28-15.467l-23.467-3.627c-20.267-3.2-38.4-6.293-53.973-9.28-13.867-4.373-28.48-10.773-43.413-18.987-14.4-8.213-26.133-17.92-35.093-28.907-9.493-11.947-17.387-27.84-23.36-47.36-6.72-21.333-10.133-46.187-10.133-73.707 0-36.373 11.733-66.88 34.667-90.88l4.693-4.907c5.867-6.080 7.573-15.040 4.373-22.827l-2.56-6.187c-8.107-20.48-9.067-43.52-2.773-68.587 3.2 1.067 6.933 2.453 11.52 4.48 0.64 0.32 1.173 0.533 1.813 0.747l0.32 0.107c22.72 8.427 33.6 14.080 38.827 17.493 1.067 0.747 2.133 1.387 3.2 1.92l0.213 0.107c8.107 4.373 14.293 8.213 18.453 11.413 0 0.107 0.107 0.107 0.213 0.213l4.373 3.307c5.44 4.16 12.587 5.44 19.093 3.413l5.12-1.6c28.907-8.64 59.413-13.12 90.667-13.12h12.587c30.827 0 61.333 4.373 90.773 13.12l4.907 1.493c6.4 1.92 13.227 0.747 18.667-3.093l22.507-16.107c13.44-6.933 28.8-14.187 45.867-21.653 4.053-1.173 7.467-2.133 10.347-2.88 6.827 25.813 6.187 48.64-1.813 68.16l-2.56 6.187c-3.2 7.573-1.6 16.427 3.947 22.507l4.587 5.013c23.893 26.027 34.987 55.147 34.987 91.413 0 28.8-3.307 53.333-9.92 72.853-0.213 0.64-0.427 1.387-0.533 2.027-6.293 20.16-13.867 35.413-22.293 45.333-0.64 0.747-1.173 1.493-1.707 2.24-9.067 11.2-20.16 20.267-33.067 26.88-0.747 0.32-1.387 0.747-2.027 1.173l-0.32 0.213c-14.72 8.96-28.907 15.040-42.133 18.027-0.96 0.213-1.813 0.533-2.773 0.853-13.973 3.733-30.827 6.507-49.813 8.32l-24.107 2.133c-8.427 0.747-15.573 6.507-18.347 14.507s-0.427 16.96 5.867 22.613l17.92 16.213c12.267 11.093 18.453 29.547 18.453 54.613v117.867c0 3.413 0.533 6.187 0.96 8l1.173 10.347c0.64 6.187 3.947 11.733 9.067 15.253 3.52 2.453 7.787 3.733 12.053 3.733 1.813 0 3.627-0.213 5.44-0.64l11.733-3.093c201.387-51.84 342.080-233.173 342.080-441.067-0.213-251.733-204.8-456.533-456.107-456.533zM626.24 745.28c8.533-1.6 16.64-3.413 24.32-5.44 18.667-4.373 37.973-12.587 57.387-24.427 19.627-10.24 36.587-24.213 50.347-41.6 13.44-15.68 24.107-36.907 32.853-64.853 8.427-25.173 12.693-55.253 12.693-89.6 0-44.8-13.653-84.267-40.533-117.547 10.56-34.667 7.467-73.707-9.173-116.16-2.56-6.4-8-11.2-14.72-12.907-4.587-1.173-9.6-1.707-15.147-1.707-11.733 0-25.6 2.667-41.28 7.893-0.533 0.213-1.173 0.427-1.707 0.64-21.44 9.387-38.613 17.493-52.693 24.96-0.853 0.427-1.707 0.96-2.453 1.493l-11.947 8.533c-31.467-8.32-63.573-12.587-95.787-12.587-2.133 0-4.267 0-6.72 0.107-0.747 0-1.387 0-2.133 0-1.28-0.107-2.453-0.107-3.733-0.107-32.747 0-64.96 4.267-96 12.693-4.8-3.093-10.133-6.187-16.213-9.493-11.093-7.253-27.307-14.613-49.387-22.72-17.067-7.36-31.573-10.987-44.16-10.987-6.827 0-13.013 0.96-18.453 2.987-5.653 2.133-10.24 6.613-12.48 12.267-16.107 41.173-18.88 80.107-8.213 115.84-26.88 32.427-40.533 72-40.533 117.76 0 33.067 4.267 63.253 12.587 89.6 8 25.707 18.987 47.573 32.747 64.747l0.107 0.107c13.013 16 29.973 29.973 50.347 41.707 0.107 0 0.107 0.107 0.213 0.107 18.453 10.347 37.12 18.453 55.36 24 0.747 0.213 1.493 0.427 2.24 0.533 7.68 1.493 15.36 2.88 23.253 4.267-3.413 7.573-6.187 16-8.107 25.067-3.413 0.96-6.933 2.027-10.667 3.093-7.68 1.067-16.533 1.92-26.453 2.453-8.213-0.533-16.64-3.307-25.067-8.107-8.747-6.507-16.853-15.68-24.107-27.413-7.893-14.933-18.88-27.093-32.64-36.053-13.44-9.387-24.96-14.507-35.947-15.893l-8.96-2.453c-2.347-0.64-4.907-0.853-7.36-0.64-10.24 0.853-17.173 2.24-22.613 4.373-1.813 0.747-3.413 1.6-4.907 2.773-10.133 7.68-13.653 19.733-9.28 30.293 1.707 5.44 4.587 10.347 8.64 14.293 2.773 4.053 6.080 7.36 9.92 9.813l1.813 1.813c2.027 2.133 4.48 3.733 7.253 4.8 4.373 1.707 9.387 6.4 14.4 13.547 0.32 0.32 0.533 0.747 0.853 1.067 6.507 8.213 11.307 15.893 14.4 23.040 0.213 0.32 0.32 0.747 0.533 1.067l5.013 10.133c3.307 10.027 7.893 18.987 13.973 26.667-23.040-18.773-44.053-40-62.507-63.467-27.307-34.667-48.533-73.173-63.147-114.56-15.147-42.88-22.827-87.893-22.827-133.76 0-54.293 10.56-106.987 31.573-156.587 20.267-47.893 49.28-90.88 86.293-127.893 37.013-37.013 80.107-66.027 128-86.293 49.6-20.907 102.293-31.573 156.693-31.573 54.4 0 107.093 10.56 156.693 31.573 48 20.267 90.987 49.28 128 86.293 37.013 37.013 66.027 80.107 86.293 128 21.013 49.6 31.68 102.293 31.68 156.693 0 45.867-7.68 90.88-22.827 133.653-14.613 41.387-35.84 79.893-63.147 114.56-27.093 34.347-59.307 63.893-95.787 87.893-29.44 19.307-61.12 34.667-94.293 45.653v-92.16c0-23.787-4.16-44.48-12.373-61.867zM320.64 865.707c12.267 2.987 24.64 4.48 36.693 4.48 1.92 0 3.947 0 6.187-0.107 2.773 0.107 5.653 0.213 8.64 0.213 4.693 0 9.173-0.213 13.44-0.64v29.547c-28.8-9.6-56.427-22.293-82.453-38.187 5.653 2.133 11.52 3.627 17.493 4.693z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
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

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
