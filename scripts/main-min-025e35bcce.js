"use strict";function validate_input(e){return isEmail(e.find('input[type="email"]').val())}function isEmail(e){return/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(e)}function register(e){$.ajax({type:e.attr("method"),url:e.attr("action"),data:e.serialize(),cache:!1,dataType:"jsonp",jsonp:"c",contentType:"application/json; charset=utf-8",error:function(e){alert("Could not connect to the registration server. Please try again later.")},success:function(t){"success"!=t.result?e.find(".form-group.email").addClass("has-danger"):(e.find(".form-group.email").addClass("has-success"),e.find('input[type="submit"]').attr("disabled",!1),alert(t.msg),setTimeout(function(){e.find(".form-group.email #mce-EMAIL").val(""),e.find(".form-group.email").removeClass("has-success")},1e3))}})}$(window).scroll(function(){var e=$("nav.navbar");$(document).scrollTop()>e.height()?e.addClass("scrolled"):e.removeClass("scrolled")});var heroSliders=$(".hero-slider");heroSliders.length>0&&heroSliders.slick({dots:!0,infinite:!0,speed:500,slidesToShow:1,adaptiveHeight:!1,verticalSwiping:!1,arrows:!1,autoplay:"localhost"!==document.location.hostname,autoplaySpeed:5e3}),$(document).ready(function(){var e=function(e,t,a){var n=e.outerHeight(),o=t.offset().top;a.scrollTop()>=o?(t.height(n),e.addClass("is-sticky")):(e.removeClass("is-sticky"),t.height("auto"))};$('[data-toggle="sticky-onscroll"]').each(function(){var t=$(this),a=$("<div>").addClass("sticky-wrapper");t.before(a),t.addClass("sticky"),$(window).on("scroll.sticky-onscroll resize.sticky-onscroll",function(){e(t,a,$(this))}),e(t,a,$(window))});var t=["shark","blue","weedy"],a=t[Math.floor(Math.random()*t.length)];$("#cover-image-home").addClass(a),$(".mfp-gallery").each(function(){$(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0,preload:[0,2],navigateByImgClick:!0}})}),$(".mfp-gallery-zoom").each(function(){$(this).magnificPopup({delegate:"a",type:"image",mainClass:"mfp-with-zoom",gallery:{enabled:!0,preload:[0,2],navigateByImgClick:!0},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.parent().parent().find("img")}}})})}),function(e){e.fn.selectHierarchy=function(t){for(var a={separator:" > ",hideOriginal:!0,placeholder:"------"},t=e.extend(a,t),n=e(this),o=1,i=n.find("option").map(function(){var a=e(this).val();if(a){var n=e(this).text(),i=n.split(t.separator),l=i.length;return l>o&&(o=l),{label:n,short_label:i[l-1],value:a,depth:l,children:[]}}}),l=[],r=1;r<=o;r++)e.each(i,function(){var t=this;t.depth==r&&(1===r&&l.push(this),e.each(i,function(){var e=this;e.depth==r+1&&e.label.match("^"+t.label)==t.label&&t.children.push(e)}))});t.hideOriginal&&n.hide(),n.wrap('<span class="drilldown-wrapper" />'),n.after('<select class="form-control drilldown drilldown-1"><option disabled selected value="">'+t.placeholder+"</option></select>");var s=n.next();s.data("depth",1),e.each(l,function(){var t=e("<option>");t.val(this.value),t.text(this.short_label),t.data("node",this),s.append(t)});var d=function a(){var o=e(this),i=o.find("option:selected"),l=i.data("node");if(o.val()?n.val(o.val()):o.data("depth")>1?n.val(o.prev().val()):n.val(""),o.nextAll("select").remove(),l&&l.children.length>0){o.after('<select class="form-control drilldown"><option selected disabled value="">'+t.placeholder+"</option></select>");var r=o.next();r.addClass("drilldown-"+(l.depth+1)),r.data("depth",l.depth+1),e.each(l.children,function(){var t=e("<option>");t.val(this.value),t.text(this.short_label),t.data("node",this),r.append(t)}),r.change(a)}};s.change(d);var c={};e.each(i,function(){c[this.short_label]=this}),n.find(" option:selected").text().split(t.separator)}}(jQuery),$(document).ready(function(){!function(){$.get("https://openrov.zendesk.com/embeddable/ticket_fields?locale=en").done(function(e){e.forEach(function(e){if("text"==e.type&&"Name"==e.title_in_portal&&$("#nameInput").data("id",e.id),24180405==e.id){var t=$("#modal-contactSupport #typeInput");$("#modal-contactSupport #typeInput").data("id",e.id);var a={},n=e.custom_field_options.map(function(e){for(var t=[],n=e.name.split("::"),o=[],i=0;i<n.length;i++){o.push(n[i]);var l=o.join(" &gt; ");if(!a[l]){a[l]={};var r=i===n.length-1?e.value:void 0;t.push('<option value="'+r+'">'+l+"</option>")}}return t.join(" ")});t.append(n),t.selectHierarchy({hideOriginal:!0,placeholder:" -- select an option -- "})}})});var e="\n\n------------------\nSubmitted from: "+location;$("#modal-contactSupport input[type=submit]").on("click",function(t){t.preventDefault(),$("#modal-contactSupport #nameInput").parent().toggleClass("has-danger",!1),$("#modal-contactSupport #emailInput").parent().toggleClass("has-danger",!1),$("#modal-contactSupport #subjectInput").parent().toggleClass("has-danger",!1),$("#modal-contactSupport #descriptionInput").parent().toggleClass("has-danger",!1),$("#modal-contactSupport .drilldown").parent().parent().toggleClass("has-danger",!1);var a=!1;try{var n=$("#nameInput").val();0==n.trim().length&&($("#nameInput").parent().toggleClass("has-danger",!0),a=!0);var o=$("#emailInput").val();0==o.trim().length&&($("#emailInput").parent().toggleClass("has-danger",!0),a=!0);var i=$("#subjectInput").val();0==i.trim().length&&($("#subjectInput").parent().toggleClass("has-danger",!0),a=!0);var l=$("#descriptionInput").val();0==l.trim().length&&($("#descriptionInput").parent().toggleClass("has-danger",!0),a=!0);var r="",s=$("#modal-contactSupport .drilldown");$(s[s.length-1]).children().toArray().forEach(function(e){e.selected&&e.value&&(r=e.value)}),0==r.trim().length&&($(s[s.length-1]).parent().parent().toggleClass("has-danger",!0),a=!0);var d=$("#nameInput").data("id"),c=$("#typeInput").data("id"),p={subject:i,tags:["web_widget"],via_id:48,comment:{body:l+e},requester:{name:n,email:o,locale_id:1},fields:{}};if(p.fields[d]=n,p.fields[c]=r,a)return;$("#submitter").prop("disabled",!0),$.ajax({type:"POST",url:"https://openrov.zendesk.com/api/v2/requests.json",data:JSON.stringify({request:p}),dataType:"json",contentType:"application/json",beforeSend:function(e){e.setRequestHeader("Authorization","Basic "+btoa(o+"/token:BO4MEQQtX70i6kDJqFmUb5voRNo8OPs2qcyGISBz"))}}).done(function(e){alert("Thank you for your support request. You will hear from us shortly."),$("#modal-contactSupport").modal("hide")}).fail(function(e){alert("Whoops, something went wrong. Please try again later.")})}catch(e){return void console.error(e)}})}()}),$(document).ready(function(){var e=$("#mc-embedded-subscribe-form");e.length>0&&e.find('input[type="submit"]').bind("click",function(t){t&&t.preventDefault(),validate_input(e)?($(this).attr("disabled",!0),e.find(".form-group.email").removeClass("has-warning"),register(e)):e.find(".form-group.email").addClass("has-warning")})});