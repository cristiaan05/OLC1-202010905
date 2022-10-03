/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proyecto1;

/**
 *
 * @author Cristian
 */
public class Proyecto1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        MainView vista=new MainView();
        vista.setVisible(true);
        
        //String entrada=vista.textoIngresado();
        /*try{
            Lexical_Analyzer lexico = new Lexical_Analyzer(
                    new BufferedReader(new FileReader(entrada))
            );
            Parser sintactico = new Parser(lexico);
            sintactico.parse();
        }catch(Exception e){
            
        }*/
        
        /*comando para ejecutar el analisis lexico
         java -jar jflex-full-1.7.0.jar LexicalAnalyzer.jflex
        */
        /*comando para ejecutar el analisis sintactico
        java -jar java-cup-11b.jar -parser Parser -symbols Simbolos parser.cup
        */
        
        //[\¿] para el interrogante izq
        //"\""[^"\""]+"\""  cualquier cosa
        // "\"".*"\""   cadena
        
    }
    

    
}
