%{
    //codigo js
    const Type = require('./Symbol/Type');
    const {Declaracion} = require('./Instrucciones/Declaration');
%}

//--------------------LEXICAL ANALYZER-------------------
%lex 

%options case-insensitive 


//inicio analisis lexico
cadena [\"][^]*[\"]                                                                    //grammar for strings ""
char "'"[^']"'"                                                                          //char ''
decimal [0-9]+("."[0-9]+)\b                                                              //decimal 0.0-9.9                                                      
varName ([a-zA-Z_])[a-zA-Z0-9_]*
entero [0-9]+\b                 
%%


"true"				return 'pr_true'
"false"				return 'pr_false'

//palabras reservadas
"int"			    return 'pr_int'
"double"			return 'pr_double'
"char"				return 'pr_char'
"boolean"			return 'pr_boolean'
"string"			return 'pr_string'
"print"				return 'pr_print'
"println"			return 'pr_println'
"const"				return 'pr_const'
"if"				return 'pr_if'
"else"				return 'pr_else'
"elif"				return 'pr_elif'
"switch"		    return 'pr_switch'
"case"				return 'pr_case'
"default"			return 'pr_default'
"while"             return 'pr_while'
"for"               return 'pr_for'
"do"                return 'pr_do'
"until"             return 'pr_until'
"break"             return 'pr_break'
"continue"          return 'pr_continue'
"void"              return 'pr_void'
"return"            return 'pr_return'
"toLower"           return 'pr_toLower'
"toUpper"           return 'pr_toUpper'
"round"             return 'pr_round'
"length"            return 'pr_length'
"typeof"            return 'pr_typeof'
"toString"          return 'pr_toString'
"toCharArray"       return 'pr_toCharArray'
"push"              return 'pr_push'
"pop"               return 'pr_pop'
"run"               return 'run'

//operaciones aritmeticas
"+"					return 'sum';
"-"					return 'difference';
"*"					return 'product';
"/"					return 'quotient';
"++"				return 'increment';
"--"				return 'reduction';
"^"                 return 'potence';
"%"                 return 'mod';

//operadores relacionales
"<="				return 'tkn_menoriugal';
"<"					return 'tkn_menor';
">="				return 'tkn_mayorigual';
">"					return 'tkn_mayor';
"="					return 'equals';
"=="				return 'equalsEquals';
"!="				return 'different';

//operador ternario
"?"					return 'inter';
":"					return 'dospuntos';

//operadores logicos
"&&"				return 'and';
"||"				return 'or';
"!"					return 'not';

//agrupacion
"("					return 'parentIzq';
")"					return 'parentDer';

// Finalizacion secuencias
";"					return 'ptcoma';
"{"					return 'llabre';
"}"					return 'llcierra';

","					return 'tkn_coma';
"."					return 'tkn_punto';
"["					return 'corcheL';
"]"					return 'corcheR';

\s+                                                                               //blank space ignore
[\/]\*[^*]*\*+([^/*][^*]*\*+)*[\/]                                                //multiline comments    
[\/][\/][^\n]*                                                                    // line comments

//tipos de dato a reconocer
{cadena}            return 'tkn_cadena'
{char}              return 'tkn_char'
{decimal}           return 'tkn_decimal'
{entero}            return 'tkn_entero'
{varName}           return 'varName'
<<EOF>>                     return 'EOF';
.                   {
            console.log("Error Léxico: "+yytext +" linea: " + yylloc.first_line +", columna: "+ yylloc.first_column+1)
}                           



//-----------------------SINTAX ANALYZER------------------
/lex
%left sum difference
%left product quotient
%left potence mod

%start INIT
//Inicio
//Definicion de gramatica


%%

INIT: INSTRUCCIONES  EOF {return  $1;}
;


INSTRUCCIONES: INSTRUCCIONES INSTRUCCION { $1.push($2); $$=$1; }
    | INSTRUCCION { $$= [$1] }
;

INSTRUCCION: DECLARACION { $$=$1; }
         | error 'ptcoma'{ console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + @1.first_line + ', en la columna: ' + @1.first_column); }
;

DECLARACION: TIPODATO LISTAID 'equals' EXPRESION 'ptcoma'
  {
        $$= new Declaracion($2,$1,$4,@1.first_line, @1.first_column);
    }
;

TIPODATO:  'pr_int' 	    {$$=$1;} 
    | 'pr_double' 	    {$$=$1;} 
    | 'pr_boolean' 	    {$$=Type.BOOLEAN;} 
    | 'pr_char' 	        {$$=Type.CARACTER;} 
    | 'pr_string' 	    {$$=Type.STRING;} 
;


LISTAID: LISTAID 'tkn_coma' 'varName'         {$1.push($3); $$ = $1}
    | 'varName'                     {$$ = [$1]}
;

EXPRESION: EXPRESION 'sum' EXPRESION {$$=$1 + $2 + $3;}
          | EXPRESION 'difference' EXPRESION {$$=$1 + $2 + $3;}
          | EXPRESION 'product' EXPRESION {$$=$1 + $2 + $3;}
          | EXPRESION 'quotient' EXPRESION {$$=$1 + $2 + $3;}
          | EXPRESION 'potence' EXPRESION {$$=$1 + $2 + $3;}
          | EXPRESION 'mod' EXPRESION {$$=$1 + $2 + $3;}
          | '(' EXPRESION ')' {$$= "(" + $2 + ")";}
          | '[' EXPRESION ']'{$$= "[" + $2 + "]";}
          | 'tkn_entero' {$$=$1;}
          | 'tkn_cadena' {$$=$1;}
          | 'tkn_char' {$$=$1;}
          | 'tkn_decimal' {$$=$1;}
          | 'varName' {$$=$1;}
          | 'pr_true' {$$=$1;}
          | 'pr_false' {$$=$1;}
;

















