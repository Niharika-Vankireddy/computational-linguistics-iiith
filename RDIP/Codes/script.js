var text1 ='{"eng":['+'{"a":"John ate an apple before afternoon" ,"b": "some students like to study in the night" , "c":"John and Mary went to church" , "d":"John went to church after eating" , "e":"did he go to market" , "f":"the woman who called my sister sells cosmetics" , "g":"John goes to the library and studies" , "h":"John ate an apple so did she" , "i":"the teacher returned the book after she noticed the error" , "j":"I told her that I bought a book yesterday"},'+
'{"a":"before afternoon John ate an apple" ,"b": "in the night some students like to study" , "c":"Mary and John went to church" , "d":"after eating John went to church" , "e":"he did go to market" , "f":"the woman who sells cosmetics called my sister" , "g":"John studies and goes to the library" , "h":"she ate an apple so did John" , "i":"the teacher noticed the error after she returned the book" , "j":"I told her yesterday that I bought a book"},'+
'{"a":"John before afternoon ate an apple" ,"b": "none" , "c":"none" , "d":"John after eating went to church" , "e":"none" , "f":"my sister who sells cosmetics called the woman" , "g":"none" , "h":"none" , "i":"after the teacher returned the book she noticed the error" , "j":"yesterday I told her that I bought a book"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none" , "f":"my sister who called the woman sells cosmetics" , "g":"none" , "h":"none" , "i":"after the teacher noticed the error she returned the book" , "j":"I bought a book that I told her yesterday"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none" , "f":"none" , "g":"none" , "h":"none" , "i":"she returned the book after the teacher noticed the error" , "j":"I bought a book yesterday that I told her"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none" , "f":"none" , "g":"none" , "h":"none" , "i":"she noticed the error after the teacher returned the book" , "j":"yesterday I bought a book that I told her"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none" , "f":"none" , "g":"none" , "h":"none" , "i":"after she returned the book the teacher noticed the error" , "j":"none"},'+
'{"a":"none" ,"b": "none" , "c":"none" , "d":"none" , "e":"none", "f":"none" , "g":"none" , "h":"none", "i":"after she noticed the error the teacher returned the book" , "j":"none"}]}';
  var text2 = '{"hindi":['+'{"a":"राम और श्याम बाजार गयें","b":"राम सोया और श्याम भी","c":"मैंने उसे बताया कि राम सो रहा है","d":"राम खाकर सोया","e":"बिल्लियों को मारकर कुत्ता सो गया","f":"एक लाल किताब वहाँ है","g":"एक बड़ी सी किताब वहाँ है"},'+
'{"a":"राम और श्याम गयें बाजार","b":"श्याम सोया और राम भी","c":"मैंने उसे बताया कि सो रहा है राम","d":"खाकर राम सोया","e":"मारकर बिल्लियों को कुत्ता सो गया","f":"एक लाल किताब है वहाँ","g":"एक बड़ी सी किताब है वहाँ"},'+
'{"a":"बाजार गयें राम और श्याम","b":"सोया श्याम और राम भी","c":"उसे मैंने बताया कि राम सो रहा है","d":"राम सोया खाकर","e":"बिल्लियों को मारकर सो गया कुत्ता","f":"वहाँ है एक लाल किताब","g":"बड़ी सी एक किताब वहाँ है"},'+
'{"a":"गयें बाजार राम और श्याम","b":"सोया राम और श्याम भी","c":"उसे मैंने बताया कि सो रहा है राम","d":"खाकर सोया राम","e":"मारकर बिल्लियों को सो गया कुत्ता","f":"है वहाँ एक लाल किताब","g":"बड़ी सी एक किताब है वहाँ"},'+
'{"a":"none","b":"none","c":"मैंने बताया उसे कि राम सो रहा है","d":"सोया राम खाकर","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"none","g":"वहाँ है एक बड़ी सी किताब"},'+
'{"a":"none","b":"none","c":"मैंने बताया उसे कि सो रहा है राम","d":"सोया खाकर राम","e":"कुत्ता सो गया मारकर बिल्लियों को","f":"none","g":"वहाँ है बड़ी सी एक किताब"},'+
'{"a":"none","b":"none","c":"उसे बताया मैंने कि राम सो रहा है","d":"none","e":"सो गया कुत्ता बिल्लियों को मारकर","f":"none","g":"है वहाँ एक बड़ी सी किताब"},'+
'{"a":"none","b":"none","c":"उसे बताया मैंने कि सो रहा है राम","d":"none","e":"सो गया कुत्ता मारकर बिल्लियों को","f":"none","g":"है वहाँ बड़ी सी एक किताब"},'+
'{"a":"none","b":"none","c":"बताया मैंने उसे कि राम सो रहा है","d":"none","e":"none","f":"none","g":"none"},'+
'{"a":"none","b":"none","c":"बताया मैंने उसे कि सो रहा है राम","d":"none","e":"none","f":"none","g":"none"},'+
'{"a":"none","b":"none","c":"बताया उसे मैंने कि राम सो रहा है","d":"none","e":"none","f":"none","g":"none"},'+
'{"a":"none","b":"none","c":"बताया उसे मैंने कि सो रहा है राम","d":"none","e":"none","f":"none","g":"none"}]}';
 var totaltext1=["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"];
var totaltext2=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"];