%{
    //codigo js
    const Type = require('./Symbol/Type');
    const {Declaracion} = require('./Instrucciones/Declaration');
    const {Asignacion}= require('./Instrucciones/Asignacion');
    const {Cast}=require('./Instrucciones/Cast');
    const {Incremento}= require('./Instrucciones/Incremento');
    const {Decremento}= require('./Instrucciones/Decremento');
    const {Vector}=require('./Instrucciones/Vector');
    const {AVector}=require('./Instrucciones/Avector');
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
\s+                                                                               //blank space ignore
[\/]\*[^*]*\*+([^/*][^*]*\*+)*[\/]                                                //multiline comments    
[\/][\/][^\n]*                                                                    // line comments


"true"				return 'pr_true'
"false"				return 'pr_false'

//palabras reservadas
"int"			    return 'pr_int'
"double"			return 'pr_double'
"char"				return 'pr_char'
"boolean"			return 'pr_boolean'
"string"			return 'pr_string'
"new"				return 'pr_new'
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

"++"				return 'increment';
"--"				return 'reduction';
"+"					return 'sum';
"-"					return 'difference';
"*"					return 'product';
"/"					return 'quotient';
"^"                 return 'potence';
"%"                 return 'mod';

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
%left 'increment' 'reduction'

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
         | ASIGNACION {$$=$1;}
         | CASTEO {$$=$1;}
         | INCREMENTO 'ptcoma' {$$=$1;}
         | DECREMENTO 'ptcoma' {$$=$1;}
         | VECTOR {$$=$1;}
         | AVECTOR 'ptcoma' {$$=$1;}
         | error 'ptcoma'{ console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + @1.first_line + ', en la columna: ' + @1.first_column); }
;

DECLARACION: TIPODATO LISTAID 'equals' EXPRESION 'ptcoma'{
            $$= new Declaracion($2,$1,$4,@1.first_line, @1.first_column);
            }
    | TIPODATO LISTAID 'ptcoma' {
        $$= new Declaracion($2,$1,"",@1.first_line, @1.first_column);
    }

;

ASIGNACION: LISTAID 'equals' EXPRESION 'ptcoma' {$$= new Asignacion($1,$3,@1.first_line,@1.first_column);}
;


CASTEO: TIPODATO LISTAID 'equals' 'parentIzq' TIPODATO 'parentDer' EXPRESION 'ptcoma'{
            $$= new Cast($2,$1,$5,$7,@1.first_line,@1.first_column);
        }
    | parentIzq' TIPODATO 'parentDer' EXPRESION 'ptcoma'{$$= new Cast("","",$5,$7,@1.first_line,@1.first_column);}
;


INCREMENTO: 'varName' 'increment'   {$$= new Incremento($1,@1.first_line,@1.first_column);}
;

DECREMENTO: 'varName' 'reduction'  {$$= new Decremento($1,@1.first_line,@1.first_column);}
;

VECTOR: TIPODATO 'corcheL' 'corcheR' 'varName' 'equals' 'pr_new' TIPODATO 'corcheL' EXPRESION 'corcheR' 'ptcoma' {
    $$=new Vector($4,$1,@1.first_line,@1.first_column);
    }
    | TIPODATO 'corcheL' 'corcheR' 'corcheL' 'corcheR' 'varName' 'equals' 'pr_new' TIPODATO 'corcheL' 'parentIzq' TIPODATO 'parentDer' EXPRESION 'corcheR' 'corcheL' 'tkn_entero' 'corcheR' 'ptcoma'  {
        $$=new Vector($6,$1,@1.first_line,@1.first_column);
        }
        
    | TIPODATO 'corcheL' 'corcheR' 'corcheL' 'corcheR' 'varName' 'equals' 'pr_new' TIPODATO 'corcheL' 'tkn_entero' 'corcheR' 'corcheL' 'parentIzq' TIPODATO 'parentDer' EXPRESION 'corcheR' 'ptcoma'  {
        $$=new Vector($6,$1,@1.first_line,@1.first_column);
        }
    | TIPODATO 'corcheL' 'corcheR' 'corcheL' 'corcheR' 'varName' 'equals' 'pr_new' TIPODATO 'corcheL' 'tkn_entero' 'corcheR' 'corcheL' 'tkn_entero' 'corcheR' 'ptcoma'  {
        $$=new Vector($6,$1,@1.first_line,@1.first_column);
        }
    | TIPODATO 'corcheL' 'corcheR' 'varName' 'equals' 'llabre' VECTORES 'llcierra' 'ptcoma' {
        $$=new Vector($4,$1,@1.first_line,@1.first_column);
        }
    | TIPODATO 'corcheL' 'corcheR' 'corcheL' 'corcheR' 'varName' 'equals' 'llabre' VECTORES2 'llcierra' 'ptcoma' {
        $$=new Vector($6,$1,@1.first_line,@1.first_column);
        }
;

VECTORES: VECTORES 'tkn_coma' 'tkn_cadena'{$$=$3;}
        | 'tkn_cadena' {$$=$1;}
        | VECTORES 'tkn_coma' 'tkn_entero'{$$=$3;}
        | 'tkn_entero' {$$=$1;}
        | VECTORES 'tkn_coma' 'tkn_char' {$$=$3;}
        | 'tkn_char' {$$=$1;}
        | VECTORES 'tkn_coma' BOOL {$$=$3;}
        | BOOL {$$=$1;}
;

VECTORES2: VECTORES2 'tkn_coma' 'llabre' VECTORES 'llcierra' {$$=$4;}
        | 'llabre' VECTORES 'llcierra' {$$=$2;}
;

AVECTOR: 'varName' 'corcheL' EXPRESION 'corcheR' {$$=new AVector($1,$3,@1.first_line,@1.first_column);}
        | 'varName' 'corcheL' EXPRESION 'corcheR' 'corcheL' EXPRESION 'corcheR' {$$=new AVector($1,$3,@1.first_line,@1.first_column);}
;



TIPODATO:  'pr_int' 	    {$$=$1;} 
    | 'pr_double' 	    {$$=$1;} 
    | 'pr_boolean' 	    {$$=$1;} 
    | 'pr_char' 	        {$$=$1;} 
    | 'pr_string' 	    {$$=$1;} 
;


LISTAID: LISTAID 'tkn_coma' 'varName'         {$1.push($3); $$ = $1}
    | 'varName'                     {$$ = [$1]}
;

EXPRESION: EXPRESION 'sum' EXPRESION { $1.push($3);  $$= $1;}
          | EXPRESION 'difference' EXPRESION {$1.push($3);  $$= $1;}
          | EXPRESION 'product' EXPRESION {$1.push($3);  $$= $1;}
          | EXPRESION 'quotient' EXPRESION {$1.push($3);  $$= $1;}
          | EXPRESION 'potence' EXPRESION {$1.push($3);  $$= $1;}
          | EXPRESION 'mod' EXPRESION {$1.push($3);  $$= $1;}
          | 'corcheL' EXPRESION 'corcheR' {$$= [$2];}
          | 'llabre' EXPRESION 'llcierra' {$$= [$2];}
          | 'tkn_entero' {$$=[$1];}
          | 'tkn_cadena' {$$=[$1];}
          | 'tkn_char' {$$=[$1];}
          | 'tkn_decimal' {$$=[$1];}
          | 'varName' {$$=[$1];}
          | 'pr_true' {$$=[$1];}
          | 'pr_false' {$$=[$1];}
          | INCREMENTO {$$=[$1];}
          | DECREMENTO {$$=[$1];}
          | AVECTOR {$$=[$1];}
;

BOOL: 'pr_false'
    | 'pr_true'
;
















