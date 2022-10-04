package analizadores;
import java_cup.runtime.*;
import java.io.*;
import javax.swing.JOptionPane;
import proyecto1.MainView;
%%

%{ 
    public static int contador=0;
    public static String lexicalErrors="";
    public static String headHtml=""
                        +"<!DOCTYPE html>"
               +" <html lang=\"es\">"

               +" <head>"
                    +"<meta charset=\"UTF-8\">"
                    +"<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">"
                    +"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
                    +"<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css\" rel=\"stylesheet\"integrity=\"sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT\" crossorigin=\"anonymous\">"
                    +"<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8\"crossorigin=\"anonymous\"></script>"
                    +"<title>REPORTE DE ERRORES LEXICOS</title>"
                +"</head>"
                +"<style>"
               +" body{"
                    +"background-color:#eab5f7;"
                +"}"
                +"h3{"
                    +"position: relative; "
                    +"padding-left: 40%;"
                    +"padding-top: 20px;"
                +"}"    
                +"h5{"
                    +"position: relative; "
                    +"padding-left: 8%;"
                    +"padding-top: 20px;"
                +"}  "
                +"#tabla{"
                    +"width: 80%;"
                   +" margin: 20px;"
                    +"padding-left: 100px;"
                    +"left: 125px;"
                    +"position: relative;"
                +"}"

                +"</style>"

                +"<body>"
                    +"<h3>TABLA DE ERRORES</h3>"
                    +"<h5>CRISTIAN FERNANDO HERNANDEZ TELLO</h5>"
                    +"<h5>202010905</h5>"
                      +"<table id=\"tabla\" class=\"table table-striped\">"
                        +"<thead class=\"table-dark\">"
                          +"<tr>"
                            +"<th scope=\"col\">NO</th>"
                            +"<th scope=\"col\">TIPO</th>"
                            +"<th scope=\"col\">LEXEMA</th>"
                            +"<th scope=\"col\">FILA</th>"
                            +"<th scope=\"col\">COLUMNA</th>"
                          +"</tr>"
                        +"</thead>"
                        +"<tbody>";
    public static String erroresHTML="";
    public static String closeHTML=""  
                        +"</tbody>"
                      +"</table>"
                +"</body>"
                +"</html>";
%}

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
multiline= [\/]\*[^*]*\*+([^/*][^*]*\*+)*[\/]
charAscii= '[\$][\{][0-9]+[\}]'
comment= [\/][\/][^\n]*
varName= [_]([A-Za-z]|[0-9]+)+[_]
interAbre= [\¿]
interCierra= [\?]
//[[!]|[#-&]|[(-\/]|[:]|[<-@]|[\x5B]|[\x5D-\x5F]|[{-}]]
//["][^"]*["]  
// cadena con salto de linea [\"]([^\"\n]|(\\\"))*[\"]

//multiline= [/\*[^*]*\*+(?:[^/*][^*]*\*+)*/]




%%
<YYINITIAL>{
    "inicio"      { System.out.println("Reconocio palabra_reservada, lexema:"+yytext()); 
                    return new Symbol(Simbolos.prInicio, yycolumn, yyline, yytext());
                  }
    "fin"         { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    Parser sintaxis= new Parser();
                    try{
                        PrintWriter writer = new PrintWriter("ReporteErrores.html");
                        writer.println(headHtml);
                        writer.println(erroresHTML);
                        writer.println("<tr><th scope=\"row\">--------</th><td scope=\"row\">------</td><td scope=\"row\">ERRORES SINTACTICOS</td><td scope=\"row\">--------</td><td scope=\"row\">--------</td> </tr>");
                        writer.println(sintaxis.noRecuperable);
                        writer.println(sintaxis.recuperable);
                        writer.println(closeHTML);
                        writer.close();
                        contador+=sintaxis.contador;
                        if (contador>=1) {
                            JOptionPane.showMessageDialog(null, "Su pseudocodigo contiene errores lexicos o sintacticos, no se realizo la traduccion");
                        }
                        System.out.println("Error Total: "+contador);
                    }catch (Exception e) {
                       System.out.println("Error");
                    }
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
    {charAscii}   {  System.out.println("Reconocio token:<charAscii> lexema: "+yytext());
                     return new Symbol(Simbolos.charAscii, yycolumn, yyline, yytext());     
                  }
    {charNormal}  {  System.out.println("Reconocio token:<charNormal> lexema: "+yytext());
                     return new Symbol(Simbolos.charNormal, yycolumn, yyline, yytext());     
                  }
    {multiline}  {  System.out.println("Reconocio token:<multiline> lexema: "+yytext());
                     return new Symbol(Simbolos.multiline, yycolumn, yyline, yytext());     
                  }
    {comment}  {  System.out.println("Reconocio token:<comment> lexema: "+yytext());
                     return new Symbol(Simbolos.comment, yycolumn, yyline, yytext());     
                  }
    {varName}  {  System.out.println("Reconocio token:<varName> lexema: "+yytext());
                     return new Symbol(Simbolos.varName, yycolumn, yyline, yytext());     
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

    "mod"    { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prMod, yycolumn, yyline, yytext());
            }

    "("     { System.out.println("Reconocio token: <leftPar> lexema: "+yytext()); 
              return new Symbol(Simbolos.leftPar, yycolumn, yyline, yytext());
            }

    ")"     { System.out.println("Reconocio token: <rightPar> lexema: "+yytext()); 
              return new Symbol(Simbolos.rightPar, yycolumn, yyline, yytext());
            }
    "["     { System.out.println("Reconocio token: <leftCor> lexema: "+yytext()); 
              return new Symbol(Simbolos.leftCor, yycolumn, yyline, yytext());
            }

    "]"     { System.out.println("Reconocio token: <rightCor> lexema: "+yytext()); 
              return new Symbol(Simbolos.rightCor, yycolumn, yyline, yytext());
            }
    ";"     { System.out.println("Reconocio token: <dotComma> lexema: "+yytext()); 
              return new Symbol(Simbolos.dotComma, yycolumn, yyline, yytext());
            }
    ","     { System.out.println("Reconocio token: <comma> lexema: "+yytext()); 
              return new Symbol(Simbolos.comma, yycolumn, yyline, yytext());
            }
    "mayor"     { System.out.println("Reconocio token: <mayor> lexema: "+yytext()); 
              return new Symbol(Simbolos.mayor, yycolumn, yyline, yytext());
            }
    "menor"     { System.out.println("Reconocio token: <menor> lexema: "+yytext()); 
              return new Symbol(Simbolos.menor, yycolumn, yyline, yytext());
            }
    "mayor_o_igual"   { System.out.println("Reconocio token: <mayorigual> lexema: "+yytext()); 
              return new Symbol(Simbolos.mayorigual, yycolumn, yyline, yytext());
            }
    "menor_o_igual"   { System.out.println("Reconocio token: <menorigual> lexema: "+yytext()); 
                return new Symbol(Simbolos.menorigual, yycolumn, yyline, yytext());
            }
    "es_igual"     { System.out.println("Reconocio token: <equals> lexema: "+yytext()); 
              return new Symbol(Simbolos.equals, yycolumn, yyline, yytext());
            }
    "es_diferente" { System.out.println("Reconocio token: <notEquals> lexema: "+yytext()); 
              return new Symbol(Simbolos.notEquals, yycolumn, yyline, yytext());
            }
    "or"    { System.out.println("Reconocio token: <or> lexema: "+yytext()); 
              return new Symbol(Simbolos.prOr, yycolumn, yyline, yytext());
            }
    "and"   { System.out.println("Reconocio token: <and> lexema: "+yytext()); 
              return new Symbol(Simbolos.prAnd, yycolumn, yyline, yytext());
            }
    "not"   { System.out.println("Reconocio token: <not> lexema: "+yytext()); 
              return new Symbol(Simbolos.prNot, yycolumn, yyline, yytext());
            }
    "ingresar"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prIngresar, yycolumn, yyline, yytext());
            }
    "como"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prComo, yycolumn, yyline, yytext());
            }
    "numero"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prNumber, yycolumn, yyline, yytext());
            }
    "cadena"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prChain, yycolumn, yyline, yytext());
            }
    "boolean"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prBoolean, yycolumn, yyline, yytext());
            }
    "caracter"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prChar, yycolumn, yyline, yytext());
            }
   "con_valor"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prConValor, yycolumn, yyline, yytext());
            }
   "->"  { System.out.println("Reconocio token: <tkAsignar> lexema: "+yytext()); 
              return new Symbol(Simbolos.tkAsignar, yycolumn, yyline, yytext());
            }

    "si"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prIf, yycolumn, yyline, yytext());
            }
    "entonces"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prEntonces, yycolumn, yyline, yytext());
            }
    "fin_si"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prEndIf, yycolumn, yyline, yytext());
            }
    "de_lo_contrario"  { System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
              return new Symbol(Simbolos.prElse, yycolumn, yyline, yytext());
            }
    "o_si"  { System.out.println("Reconocio palabra_reservada 'o_si', lexema:"+yytext());
              return new Symbol(Simbolos.prElseIf, yycolumn, yyline, yytext());
            }
    "segun"  { System.out.println("Reconocio palabra_reservada 'segun', lexema:"+yytext());
              return new Symbol(Simbolos.prSegun, yycolumn, yyline, yytext());
            }
    "hacer"  { System.out.println("Reconocio palabra_reservada 'hacer', lexema:"+yytext());
              return new Symbol(Simbolos.prHacer, yycolumn, yyline, yytext());
            }
     {interAbre}  { System.out.println("Reconocio token: <tkInterLeft> lexema: "+yytext()); 
              return new Symbol(Simbolos.tkInterLeft, yycolumn, yyline, yytext());
            }
     {interCierra}  { System.out.println("Reconocio token: <tkInterRight> lexema: "+yytext()); 
              return new Symbol(Simbolos.tkInterRight, yycolumn, yyline, yytext());
            }
    "fin_segun"  { System.out.println("Reconocio palabra_reservada 'fin segun', lexema:"+yytext());
              return new Symbol(Simbolos.prEndSegun, yycolumn, yyline, yytext());
            }
    "para"  { System.out.println("Reconocio palabra_reservada 'Para', lexema:"+yytext());
              return new Symbol(Simbolos.prFor, yycolumn, yyline, yytext());
            }
    "hasta"  { System.out.println("Reconocio palabra_reservada 'hasta', lexema:"+yytext());
              return new Symbol(Simbolos.prHasta, yycolumn, yyline, yytext());
            }
    "fin_para"  { System.out.println("Reconocio palabra_reservada 'Fin Para', lexema:"+yytext());
              return new Symbol(Simbolos.prEndFor, yycolumn, yyline, yytext());
            }
    "con"  { System.out.println("Reconocio palabra_reservada 'con', lexema:"+yytext());
              return new Symbol(Simbolos.prCon, yycolumn, yyline, yytext());
            }
    "incremental"  { System.out.println("Reconocio palabra_reservada 'incremental', lexema:"+yytext());
              return new Symbol(Simbolos.prIncremental, yycolumn, yyline, yytext());
            }
    "mientras"  { System.out.println("Reconocio palabra_reservada 'mientras', lexema:"+yytext());
              return new Symbol(Simbolos.prWhile, yycolumn, yyline, yytext());
            }
    "fin_mientras"  { System.out.println("Reconocio palabra_reservada 'Fin mientras', lexema:"+yytext());
              return new Symbol(Simbolos.prEndWhile, yycolumn, yyline, yytext());
            }
    "repetir"  { System.out.println("Reconocio palabra_reservada 'repetir', lexema:"+yytext());
              return new Symbol(Simbolos.prDo, yycolumn, yyline, yytext());
            }
    "hasta_que"  { System.out.println("Reconocio palabra_reservada 'hasta_que', lexema:"+yytext());
              return new Symbol(Simbolos.prDoWhile, yycolumn, yyline, yytext());
            }
    "retornar"  { System.out.println("Reconocio palabra_reservada 'return', lexema:"+yytext());
              return new Symbol(Simbolos.prReturn, yycolumn, yyline, yytext());
            }
    "metodo"  { System.out.println("Reconocio palabra_reservada 'metodo', lexema:"+yytext());
              return new Symbol(Simbolos.prMetodo, yycolumn, yyline, yytext());
            }
    "fin_metodo"  { System.out.println("Reconocio palabra_reservada 'fin_metodo', lexema:"+yytext());
              return new Symbol(Simbolos.prEndMetodo, yycolumn, yyline, yytext());
            }
    "con_parametros"  { System.out.println("Reconocio palabra_reservada 'con_parametros', lexema:"+yytext());
              return new Symbol(Simbolos.prParametros, yycolumn, yyline, yytext());
            }
    "funcion"  { System.out.println("Reconocio palabra_reservada 'funcion', lexema:"+yytext());
              return new Symbol(Simbolos.prFunction, yycolumn, yyline, yytext());
            }
    "fin_funcion"  { System.out.println("Reconocio palabra_reservada 'fin_funcion', lexema:"+yytext());
              return new Symbol(Simbolos.prEndFunction, yycolumn, yyline, yytext());
            }
    "ejecutar"  { System.out.println("Reconocio palabra_reservada 'ejecutar', lexema:"+yytext());
              return new Symbol(Simbolos.prEjecutar, yycolumn, yyline, yytext());
            }
    "imprimir"  { System.out.println("Reconocio palabra_reservada 'imprimir', lexema:"+yytext());
              return new Symbol(Simbolos.prPrint, yycolumn, yyline, yytext());
            }
    "imprimir_nl"  { System.out.println("Reconocio palabra_reservada 'imprimir nl', lexema:"+yytext());
              return new Symbol(Simbolos.prPrintnl, yycolumn, yyline, yytext());
            }
}

[ \t\r\n\f]         {  /*este es un comentario en java, omitirlos*/ }


.   {
    contador+=1;
    erroresHTML+="<tr><th scope=\"row\">"+contador+"</th><td>Léxico</td><td>"+yytext()+"</td><td>"+(yyline+1)+"</td><td>"+(yycolumn+1)+"</td> </tr>";
    System.out.println("Error Lexico : "+yytext()+ "Linea"+(yyline+1)+" Columna "+(yycolumn+1));    

}


