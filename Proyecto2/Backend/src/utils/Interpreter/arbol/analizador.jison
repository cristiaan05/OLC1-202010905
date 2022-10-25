%{
    //codigo js
    
%}

//--------------------LEXICAL ANALYZER-------------------
%lex 

%options case-insensitive 
//inicio analisis lexico
cadena [\"][^]*[\"]                                                                    //grammar for strings ""
char "'"[^']"'"                                                                          //char ''
decimal [0-9]+("."[  |0-9]+)?                                                             //decimal 0.0-9.9
entero [0-9]+                                                                           //enteros 

%%

\s+                                                                               //blank space ignore
[\/]\*[^*]*\*+([^/*][^*]*\*+)*[\/]                                                //multiline comments    
[\/][\/][^\n]*                                                                    // line comments

//tipos de dato a reconocer
{cadena}            return 'tkn_cadena'
{char}              return 'tkn_char'
{decimal}           return 'tkn_decimal'
{entero}            return 'tkn_entero'
"true"				return 'pr_true';
"false"				return 'pr_false';

//palabras reservadas
"int"			    return 'pr_int';
"double"			return 'pr_double';
"char"				return 'pr_char';
"boolean"			return 'pr_boolean';
"string"			return 'pr_string';
"print"				return 'pr_print';
"println"			return 'pr_println';
"const"				return 'pr_const';
"if"				return 'pr_if';
"else"				return 'pr_else';
"elif"				return 'pr_elif';
"switch"		    return 'pr_switch';
"case"				return 'pr_case';
"default"			return 'pr_default';
"while"             return 'pr_while';
"for"               return 'pr_for'
"do"                return 'pr_do';
"until"             return 'pr_until';
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


<<EOF>>                     return 'EOF';
.                           return 'INVALID'


//-----------------------SINTAX ANALYZER------------------
/lex
%start INIT
//Inicio
//Definicion de gramatica
%%


INIT: ;