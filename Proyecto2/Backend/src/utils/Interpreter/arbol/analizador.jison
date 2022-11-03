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
    const {MVector}=require('./Instrucciones/MVector');
    const {If}=require('./Instrucciones/If');
    const {Elif}=require('./Instrucciones/Elif');
    const {Print}=require('./Instrucciones/Print');
    const {Println}=require('./Instrucciones/Println');
    const {Switch}=require('./Instrucciones/Switch');
    const {CaseSwitch} =require('./Instrucciones/CaseSwitch');
    const {While} =require('./Instrucciones/While');
    const {For} =require('./Instrucciones/For');
    const {DoWhile} =require('./Instrucciones/DoWhile');
    const {DoUntil}=require('./Instrucciones/DoUntil');
    const {Break}=require('./Instrucciones/Break');
    const {Continue}=require('./Instrucciones/Continue');
    const {Return}=require('./Instrucciones/Return');
    const {Funcion}=require('./Instrucciones/Funcion');
    const {Metodo}=require('./Instrucciones/Metodo');
    const {Llamada}=require('./Instrucciones/Llamada');
    const {Tolower}=require('./Instrucciones/ToLower');
    const {ToUpper}=require('./Instrucciones/ToUpper');
%}

//--------------------LEXICAL ANALYZER-------------------
%lex 

%options case-insensitive 


//inicio analisis lexico
cadena  "\""  [^\"]* "\""                                                                  //grammar for strings ""
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
"=="				return 'equalsEquals';
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
%left 'or'
%left 'and'
%left 'or'
%left 'tkn_mayor' 'tkn_menor' 'tkn_mayorigual' 'tkn_menoriugal' 'equalsEquals' 'different'
%left 'sum' 'difference'
%left 'product' 'quotient'
%left 'potence' 'mod'
%left  'UNOT'
%left 'increment' 'reduction'
%left 'parentIzq' 'parentDer'

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
         | CASTEO 'ptcoma' {$$=$1;}
         | INCREMENTO 'ptcoma' {$$=$1;}
         | DECREMENTO 'ptcoma' {$$=$1;}
         | VECTOR {$$=$1;}
         | AVECTOR 'ptcoma' {$$=$1;}
         | MODIFICAVECTOR  {$$=$1;}
         | IF {$$=$1;}
         | SWITCH {$$=$1;}
         | WHILE {$$=$1;}
         | FOR{$$=$1;}
         | DOWHILE  {$$ = $1;}
         | DOUNTIL  {$$ = $1;}
         | BREAK 'ptcoma' {$$=$1;}
         | CONTINUE 'ptcoma' {$$=$1;}
         | RETURN 'ptcoma' {$$=$1;}
         | FUNCION {$$=$1;}
         | METODO {$$=$1;}
         | LLAMADA 'ptcoma' {$$=$1;}
         | PRINT{$$=$1;}
         | PRINTLN {$$=$1;}
         | TOLOWER{$$=$1;}
         | TOUPPER{$$=$1;}
         | error 'ptcoma'{ console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + @1.first_line + ', en la columna: ' + @1.first_column); }
;

DECLARACION: TIPODATO LISTAID 'equals' EXPVECTORES 'ptcoma'{
            $$= new Declaracion($2,$1,$4,@1.first_line, @1.first_column);
            }
    | TIPODATO LISTAID 'ptcoma' {
        $$= new Declaracion($2,$1,"",@1.first_line, @1.first_column);
    }

;

ASIGNACION: LISTAID 'equals' EXPVECTORES 'ptcoma' {
    $$= new Asignacion($1,$3,@1.first_line,@1.first_column);
    }
;


CASTEO: TIPODATO LISTAID 'equals' 'parentIzq' TIPODATO 'parentDer' EXPRESION {
            $$= new Cast($2,$1,$5,$7,@1.first_line,@1.first_column);
        }
    | 'parentIzq' TIPODATO 'parentDer' EXPRESION {
        $$= new Cast("","",$2,$4,@1.first_line,@1.first_column);
        }
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

AVECTOR: 'varName' 'corcheL' EXPVECTORES 'corcheR' {$$=new AVector($1,$3,@1.first_line,@1.first_column);}
        | 'varName' 'corcheL' EXPVECTORES 'corcheR' 'corcheL' EXPVECTORES 'corcheR' {$$=new AVector($1,$3,@1.first_line,@1.first_column);}
;

MODIFICAVECTOR: 'varName' 'corcheL' EXPVECTORES 'corcheR' 'equals' EXPVECTORES 'ptcoma' {
        $$=new MVector($1,$6,@1.first_line,@1.first_column);
        }
;

IF:  'pr_if' 'parentIzq' EXPRESION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra' {
        $$=new If($6,$3,@1.first_line,@1.first_column);
        }
    | 'pr_if' 'parentIzq' EXPRESION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra' 'pr_else' 'llabre' INSTRUCCIONES 'llcierra' {
        $$=new If($6,$3,@1.first_line,@1.first_column,undefined,$10);
        } 
    | 'pr_if' 'parentIzq' EXPRESION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra' ELIF 'pr_else' 'llabre' INSTRUCCIONES 'llcierra' {
        $$=new If($6,$3,@1.first_line,@1.first_column,$8,$11);
        }
    | 'pr_if' 'parentIzq' EXPRESION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra' ELIF {
        $$=new If($6,$3,@1.first_line,@1.first_column,$8);
        }
;

ELIF: 'pr_elif' 'parentIzq' EXPRESION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra' {
        $$=[new Elif($6,$3,@1.first_line,@1.first_column)];
        }
    | ELIF 'pr_elif' 'parentIzq' EXPRESION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra'  {
        $1.push(new Elif($7,$4,@1.first_line,@1.first_column));
        $$=$1;
        }
 /*   |'pr_elif' 'parentIzq' EXPRESION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra' {
        $$=[new Elif($6,$3,@1.first_line,@1.first_column)];
        }
    | ELIF 'pr_elif' 'parentIzq' EXPRESION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra'  {
        $1.push(new Elif($7,$4,@1.first_line,@1.first_column));
        $$=$1;
        }*/
;

SWITCH: 'pr_switch' 'parentIzq' EXPRESION 'parentDer' 'llabre' CASES 'llcierra' {
            $$=new Switch($3, $6, @1.first_line, @1.first_column);
        }
;

CASES: CASES CASE {$1.push($2); $$=$1;}
    | CASE {$$=[$1]}
;

CASE: 'pr_case' EXPRESION 'dospuntos' INSTRUCCIONES {$$ = new CaseSwitch($1, $2, $4, @1.first_line, @1.first_column);}
    | 'pr_default' 'dospuntos' INSTRUCCIONES {$$ = new CaseSwitch($1, undefined, $3, @1.first_line, @1.first_column);}
;

WHILE: 'pr_while' 'parentIzq' EXPRESION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra' {$$ = new While($3, $6);}
  //  | 'pr_while' 'parentIzq' CONDICIONAL 'parentDer' 'llabre' INSTRUCCIONES 'llcierra' {$$ = new While($3, $6);}
;

FOR: 'pr_for' 'parentIzq' INICIALIZACION CONDICION ACTUALIZACION 'parentDer' 'llabre' INSTRUCCIONES 'llcierra'{
      $$ = new For($3, $4, $5, $8, @1.first_line, @1.first_column);
    }
;

INICIALIZACION: DECLARACION       {$$ = [$1]}
        | ASIGNACION              {$$ = [$1]}
;

CONDICION:  EXPRESION {$$ = $1}
   // |  CONDICIONAL  {$$ = $1}
;

ACTUALIZACION: ptcoma INCREMENTO          {$$ = [$2]}
    | ptcoma DECREMENTO          {$$ = [$2]}
    | ptcoma ASIGNACION         {$$ = [$2]}
;

DOWHILE: 'pr_do' 'llabre' INSTRUCCIONES 'llcierra' 'pr_while' 'parentIzq' EXPRESION 'parentDer' 'ptcoma' {
    $$ = new DoWhile($7, $3);
    }
   /* |'pr_do' 'llabre' INSTRUCCIONES 'llcierra' 'pr_while' 'parentIzq' CONDICIONAL 'parentDer' 'ptcoma' {
    $$ = new DoWhile($7, $3);
    }*/
;

DOUNTIL: 'pr_do' 'llabre' INSTRUCCIONES 'llcierra' 'pr_until' 'parentIzq' EXPRESION 'parentDer' 'ptcoma' {
        $$ = new DoUntil($7, $3);
    }
;

BREAK: 'pr_break' {$$=new Break(@1.first_line, @1.first_column); }
;

CONTINUE: 'pr_continue' {$$=new Continue(@1.first_line, @1.first_column); }
;

RETURN : 'pr_return' EXPRESION   { $$= new Return($2, @1.first_line, @1.first_column); }
    | 'pr_return'             { $$= new Return(null, @1.first_line, @1.first_column); }
;

FUNCION: 'varName' 'parentIzq' PARAMETROS 'parentDer' 'dospuntos' TIPODATO 'llabre' INSTRUCCIONES 'llcierra' {
        $$= new Funcion($1,$3,$6,$8,@1.first_line, @1.first_column );
    }
;

PARAMETROS: PARAMETROS 'tkn_coma' TIPODATO 'varName'   {$$=$1+", "+$3+" "+$4;}
    | TIPODATO 'varName'     {$$ = $1+" "+$2;}
;

METODO: 'varName' 'parentIzq' PARAMETROS 'parentDer' 'dospuntos' 'pr_void' 'llabre' INSTRUCCIONES 'llcierra'{
        $$= new Metodo($1,$3,$6,$8,@1.first_line, @1.first_column );
    }
;

LLAMADA: 'varName' 'parentIzq' PARAMETROSCALL 'parentDer'{
            $$= new Llamada($1,$3,@1.first_line, @1.first_column );
        }
    | 'varName' 'parentIzq' 'parentDer'{
            $$= new Llamada($1,undefined,@1.first_line, @1.first_column )
    } 
;

PARAMETROSCALL:  PARAMETROSCALL 'tkn_coma' EXPRESION {$$=$1+", "+$3;}
    |  EXPRESION {$$ = $1+" ";}
;


PRINT: 'pr_print' 'parentIzq' EXPRESION 'parentDer' 'ptcoma' {
    $$=new Print($1,$3,@1.first_line,@1.first_column);
    }
;

TOLOWER: 'pr_string' 'varName' 'equals' 'pr_toLower' 'parentIzq' EXPRESION 'parentDer' 'ptcoma' {
            $$=new Tolower($2,$6,@1.first_line,@1.first_column,"de");
        }
    |  'varName' 'equals' 'pr_toLower' 'parentIzq' EXPRESION 'parentDer' 'ptcoma' {
            $$=new Tolower($1,$5,@1.first_line,@1.first_column,"asig");
        }
    | 'pr_toLower' 'parentIzq' EXPRESION 'parentDer' 'ptcoma'{
             $$=new Tolower("null",$3,@1.first_line,@1.first_column);
        }
;

TOUPPER: 'pr_string' 'varName' 'equals' 'pr_toUpper' 'parentIzq' EXPRESION 'parentDer' 'ptcoma' {
            $$=new ToUpper($2,$6,@1.first_line,@1.first_column,"de");
        }
    |  'varName' 'equals' 'pr_toUpper' 'parentIzq' EXPRESION 'parentDer' 'ptcoma' {
            $$=new ToUpper($1,$5,@1.first_line,@1.first_column,"asig");
        }
    | 'pr_toUpper' 'parentIzq' EXPRESION 'parentDer' 'ptcoma'{
             $$=new ToUpper("null",$3,@1.first_line,@1.first_column);
        }
;


PRINTLN: 'pr_println' 'parentIzq' EXPRESION 'parentDer' 'ptcoma' {
    $$=new Println($1,$3,@1.first_line,@1.first_column);
    }
;   

CONDICIONAL: EXPRESION 'equalsEquals' EXPRESION {$$= $1+$2+$3;}
        | EXPRESION 'different' EXPRESION{$$= $1+$2+$3;}
        | EXPRESION 'tkn_mayorigual' EXPRESION {$$= $1+$2+$3;}
        | EXPRESION 'tkn_menoriugal' EXPRESION {$$= $1+$2+$3;}
        | EXPRESION 'tkn_mayor' EXPRESION {$$= $1+$2+$3;}
        | EXPRESION 'tkn_menor' EXPRESION {$$= $1+$2+$3;}
;

EXPVECTORES: CASTEO {$$=$1}
    | EXPRESION {$$=$1}
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

EXPRESION: EXPRESION 'sum' EXPRESION {$$=$1 + "+" + $3;}
          | EXPRESION 'difference' EXPRESION {$$=$1 + "-" + $3;}
          | EXPRESION 'product' EXPRESION {$$=$1 + "*" + $3;}
          | EXPRESION 'quotient' EXPRESION {$$=$1 + "/" + $3;}
          | EXPRESION 'potence' EXPRESION {$$=$1 + "^" + $3;}
          | EXPRESION 'mod' EXPRESION {$$=$1 + "%" + $3;}
          | EXPRESION 'or' EXPRESION {$$=$1 + $2 + $3;}
          | EXPRESION 'and' EXPRESION {$$=$1 + $2 + $3;}
          | 'not' EXPRESION %prec UNOT {$$=$1 +$2;}
          | 'parentIzq' EXPRESION 'parentDer' {$$= $1 + $2 + $3;}
          | 'corcheL' EXPRESION 'corcheR' {$$=$1+$2+$3;}
          | 'llabre' EXPRESION 'llcierra' {$$=$1+$2+$3;}
          | 'tkn_entero' {$$=$1;}
          | 'tkn_cadena' {$$=$1;}
          | 'tkn_char' {$$=$1;}
          | 'tkn_decimal' {$$=$1;}
          | 'varName' {$$=$1;}
          | 'pr_true' {$$=$1;}
          | 'pr_false' {$$=$1;}
          | INCREMENTO {$$=[$1];}
          | DECREMENTO {$$=[$1];}
          | AVECTOR {$$=[$1];}
          | CONDICIONAL {$$=$1;}
          | LLAMADA {$$=$1;}
;

BOOL: 'pr_false'
    | 'pr_true'
;
















