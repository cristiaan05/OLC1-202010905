package analizadores;
import java_cup.runtime.*;

%%

//directrices


%public 
%class Lexical_Analyzer
%cupsym Simbolos
%cup
%char
%column
%full
%ignorecase
%line
%unicode

//------REGULAR EXPRESSION
entero= [0-9]+
decimal= [0-9]+("."[  |0-9]+)?
cadena = [\"][^\"]*[\"]
charNormal=[\']([^\t\'\"\n]|(\\\")|(\\n)|(\\\')|(\\t))?[\']
//charAscii= [[!]|[#-&]|[(-\/]|[:]|[<-@]|[\x5B]|[\x5D-\x5F]|[{-}]]
//["][^"]*["]  
// cadena con salto de linea [\"]([^\"\n]|(\\\"))*[\"]

//multiline= [/\*[^*]*\*+(?:[^/*][^*]*\*+)*/]




%%
<YYINITIAL>{
    "inicio"      { System.out.println("Reconocio palabra_reservada, lexema:"+yytext()); 
                    return new Symbol(Simbolos.prInicio, yycolumn, yyline, yytext());
                  }
    "fin"         { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prFin, yycolumn, yyline, yytext()); 
                  }
    {entero}      {   System.out.println("Reconocio token:<entero> lexema:"+yytext());
                      return new Symbol(Simbolos.nEntero, yycolumn, yyline, yytext());     
                  }
    {decimal}     {  System.out.println("Reconocio token:<decimal> lexema:"+yytext());
                     return new Symbol(Simbolos.nDecimal, yycolumn, yyline, yytext());     
                  }
    {cadena}     {  System.out.println("Reconocio token:<cadena> lexema: "+yytext());
                     return new Symbol(Simbolos.cadena, yycolumn, yyline, yytext());     
                  }
    "verdadero"    { System.out.println("Reconocio palabra_reservada, lexema:"+yytext()); 
                    return new Symbol(Simbolos.prTrue, yycolumn, yyline, yytext());
                  }
    "falso"    { System.out.println("Reconocio palabra_reservada, lexema:"+yytext()); 
                    return new Symbol(Simbolos.prFalse, yycolumn, yyline, yytext());
                  }
    /*{charAscii}     {  System.out.println("Reconocio token:<charAscii> lexema: "+yytext());
                     return new Symbol(Simbolos.charAscii, yycolumn, yyline, yytext());     
                  }*/
    {charNormal}  {  System.out.println("Reconocio token:<charNormal> lexema: "+yytext());
                     return new Symbol(Simbolos.charNormal, yycolumn, yyline, yytext());     
                  }

    "+"     { System.out.println("Reconocio token: <plus> lexema: "+yytext()); 
              return new Symbol(Simbolos.plus, yycolumn, yyline, yytext());
            }

    "-"     { System.out.println("Reconocio token: <minus> lexema: "+yytext()); 
              return new Symbol(Simbolos.minus, yycolumn, yyline, yytext());
            }

    "*"     { System.out.println("Reconocio token: <per> lexema: "+yytext()); 
              return new Symbol(Simbolos.per, yycolumn, yyline, yytext());
            }

    "/"     { System.out.println("Reconocio token: <div> lexema: "+yytext()); 
              return new Symbol(Simbolos.div, yycolumn, yyline, yytext());
            }

    "potencia"      { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prExponent, yycolumn, yyline, yytext());
            }

    "modulo"    { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prMod, yycolumn, yyline, yytext());
            }

    "("     { System.out.println("Reconocio token: <leftPar> lexema: "+yytext()); 
              return new Symbol(Simbolos.leftPar, yycolumn, yyline, yytext());
            }

    ")"     { System.out.println("Reconocio token: <rightPar> lexema: "+yytext()); 
              return new Symbol(Simbolos.rightPar, yycolumn, yyline, yytext());
            }
}

[ \t\r\n\f]         {  /*este es un comentario en java, omitirlos*/ }


.   {
    System.out.println("Error Lexico : "+yytext()+ "Linea"+(yyline+1)+" Columna "+yycolumn);    
}


