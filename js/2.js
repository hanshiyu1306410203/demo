var gt = unescape('%3e'); var popup = null;  var over = "Launch Pop-up Navigator";
popup = window.open('', 'popupnav', 'width=225,height=235,resizable=1,scrollbars=auto');
if (popup != null) {  if (popup.opener == null) { popup.opener = self;  }  popup.location.href = 'tan.htm'; }