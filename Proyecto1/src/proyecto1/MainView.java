/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proyecto1;

import analizadores.Lexical_Analyzer;
import analizadores.Parser;
import java.awt.Desktop;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JFileChooser;
import javax.swing.filechooser.FileNameExtensionFilter;

/**
 *
 * @author Cristian
 */
public class MainView extends javax.swing.JFrame {

    /**
     * Creates new form MainView
     */
     public static String codigoPyhton="";
    public MainView() {
        initComponents();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jMenuItem1 = new javax.swing.JMenuItem();
        jMenuBar2 = new javax.swing.JMenuBar();
        jMenu3 = new javax.swing.JMenu();
        jMenu4 = new javax.swing.JMenu();
        contenedor = new javax.swing.JPanel();
        tituloCarnet = new javax.swing.JLabel();
        cleanButton = new javax.swing.JButton();
        runButton = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        textArea = new javax.swing.JTextArea();
        labelTextErrores = new javax.swing.JLabel();
        labelErrores = new javax.swing.JLabel();
        viewCGolang = new javax.swing.JButton();
        viewCPython = new javax.swing.JButton();
        menuBar = new javax.swing.JMenuBar();
        file = new javax.swing.JMenu();
        openFile = new javax.swing.JMenuItem();
        fileSaveAs = new javax.swing.JMenuItem();
        report = new javax.swing.JMenu();
        reportFlowChart = new javax.swing.JMenuItem();
        reportErrors = new javax.swing.JMenuItem();
        arbolSintaxis = new javax.swing.JMenuItem();
        view = new javax.swing.JMenu();
        userManual = new javax.swing.JMenuItem();
        tecManual = new javax.swing.JMenuItem();

        jMenuItem1.setText("jMenuItem1");

        jMenu3.setText("File");
        jMenuBar2.add(jMenu3);

        jMenu4.setText("Edit");
        jMenuBar2.add(jMenu4);

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        contenedor.setBackground(new java.awt.Color(204, 204, 255));
        contenedor.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        tituloCarnet.setText("OLC1_2S_2022  202010905");

        cleanButton.setText("Clean");
        cleanButton.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                cleanButtonMouseClicked(evt);
            }
        });

        runButton.setText("Run");
        runButton.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                runButtonMouseClicked(evt);
            }
        });
        runButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                runButtonActionPerformed(evt);
            }
        });

        textArea.setColumns(20);
        textArea.setFont(new java.awt.Font("Arial Black", 0, 12)); // NOI18N
        textArea.setRows(5);
        jScrollPane1.setViewportView(textArea);

        labelTextErrores.setText("errors");

        labelErrores.setText("0");

        viewCGolang.setText("View Code Golang");

        viewCPython.setText("View Code Python");
        viewCPython.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                viewCPythonMouseClicked(evt);
            }
        });

        javax.swing.GroupLayout contenedorLayout = new javax.swing.GroupLayout(contenedor);
        contenedor.setLayout(contenedorLayout);
        contenedorLayout.setHorizontalGroup(
            contenedorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(contenedorLayout.createSequentialGroup()
                .addContainerGap(606, Short.MAX_VALUE)
                .addGroup(contenedorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, contenedorLayout.createSequentialGroup()
                        .addComponent(tituloCarnet)
                        .addContainerGap())
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, contenedorLayout.createSequentialGroup()
                        .addComponent(cleanButton)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(runButton)
                        .addGap(66, 66, 66))))
            .addGroup(contenedorLayout.createSequentialGroup()
                .addGroup(contenedorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(contenedorLayout.createSequentialGroup()
                        .addGap(30, 30, 30)
                        .addComponent(labelErrores)
                        .addGap(18, 18, 18)
                        .addComponent(labelTextErrores)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(viewCGolang)
                        .addGap(18, 18, 18)
                        .addComponent(viewCPython))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, contenedorLayout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(jScrollPane1)))
                .addContainerGap())
        );
        contenedorLayout.setVerticalGroup(
            contenedorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(contenedorLayout.createSequentialGroup()
                .addComponent(tituloCarnet)
                .addGap(18, 18, 18)
                .addGroup(contenedorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(cleanButton)
                    .addComponent(runButton))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 340, Short.MAX_VALUE)
                .addGap(18, 18, 18)
                .addGroup(contenedorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(labelTextErrores)
                    .addComponent(labelErrores)
                    .addComponent(viewCGolang)
                    .addComponent(viewCPython))
                .addGap(23, 23, 23))
        );

        menuBar.setBackground(new java.awt.Color(204, 204, 255));

        file.setText("File");

        openFile.setText("Open File");
        openFile.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                openFileActionPerformed(evt);
            }
        });
        file.add(openFile);

        fileSaveAs.setText("Save As");
        fileSaveAs.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                fileSaveAsActionPerformed(evt);
            }
        });
        file.add(fileSaveAs);

        menuBar.add(file);

        report.setText("Report");

        reportFlowChart.setText("FlowChart");
        reportFlowChart.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                reportFlowChartActionPerformed(evt);
            }
        });
        report.add(reportFlowChart);

        reportErrors.setText("Errors");
        report.add(reportErrors);

        arbolSintaxis.setText("Arbol Sintactico");
        arbolSintaxis.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                arbolSintaxisActionPerformed(evt);
            }
        });
        report.add(arbolSintaxis);

        menuBar.add(report);

        view.setText("View");

        userManual.setText("User Manual");
        view.add(userManual);

        tecManual.setText("Technical Manual");
        tecManual.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                tecManualActionPerformed(evt);
            }
        });
        view.add(tecManual);

        menuBar.add(view);

        setJMenuBar(menuBar);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(contenedor, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(contenedor, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void openFileActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_openFileActionPerformed
        // TODO add your handling code here:
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.addChoosableFileFilter(new FileNameExtensionFilter("*.olc", "olc"));
        fileChooser.setCurrentDirectory(new File(System.getProperty("user.dir")));
        int result = fileChooser.showOpenDialog(this);
        if (result == JFileChooser.APPROVE_OPTION) {
            File selectedFile = fileChooser.getSelectedFile();
            System.out.println("Selected file: " + selectedFile.getAbsolutePath());
            String textoAIngresar;     
            try {
                textoAIngresar=leerArchivo(selectedFile.getAbsolutePath());
                textArea.setText(textoAIngresar);
            } catch (IOException ex) {
                System.out.println("Error while reading file");
            }
        }
    }//GEN-LAST:event_openFileActionPerformed

    private void reportFlowChartActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_reportFlowChartActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_reportFlowChartActionPerformed

    private void tecManualActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_tecManualActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_tecManualActionPerformed

    private void runButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_runButtonActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_runButtonActionPerformed

    private void runButtonMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_runButtonMouseClicked
        // TODO add your handling code here:
        File fileTemporal = null;
        try {
            fileTemporal = File.createTempFile("temp", null);
            writeFile(fileTemporal.getAbsoluteFile());
        } catch (IOException ex) {
           
        }
        System.out.println(fileTemporal.getAbsolutePath());
        fileTemporal.deleteOnExit();
        
        try{
            Lexical_Analyzer lexico = new Lexical_Analyzer( 
                    new BufferedReader(new FileReader(fileTemporal.getAbsolutePath()))
            );
            Parser sintactico = new Parser(lexico);
            sintactico.parse();
            int total=0;
            total=Lexical_Analyzer.contador;
            totalErrores(String.valueOf(total));
            codigoPyhton=sintactico.pythonText;
        }catch(Exception e){
            
        }
        
        
    }//GEN-LAST:event_runButtonMouseClicked

    private void cleanButtonMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_cleanButtonMouseClicked
        // TODO add your handling code here:
        textArea.setText("");
    }//GEN-LAST:event_cleanButtonMouseClicked

    private void fileSaveAsActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_fileSaveAsActionPerformed
        JFileChooser fileChooser = new JFileChooser();
        //esto remueve la extension de todos los archivos
        fileChooser.removeChoosableFileFilter(fileChooser.getAcceptAllFileFilter());
        //agrega la extension de archivos .olc
        fileChooser.addChoosableFileFilter(new FileNameExtensionFilter("*.olc", "OLC File"));
        //selecciona el directorio donde se abrira el explorador de archivos
        fileChooser.setCurrentDirectory(new File(System.getProperty("user.dir")));
        if (fileChooser.showSaveDialog(this) == JFileChooser.APPROVE_OPTION) {
          File fileSaved = fileChooser.getSelectedFile();
          fileSaved.setWritable(true);
            try {
                if (fileSaved.createNewFile()) {
                    System.out.println("File created: " + fileSaved.getName());
                    writeFile(fileSaved);
                } else {
                    System.out.println("File already exists.");
                }
                //System.out.println("Saved file: " + fileSaved.getAbsolutePath());
                // save to file
            } catch (IOException ex) {
                System.out.println("An error occurred.");
            }
        }
    }//GEN-LAST:event_fileSaveAsActionPerformed

    private void viewCPythonMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_viewCPythonMouseClicked
        System.out.println("Abri traduccion python");
        PythonView vistaPythonView=new PythonView();
        vistaPythonView.setVisible(true);
        vistaPythonView.setTraduccion(codigoPyhton);
    }//GEN-LAST:event_viewCPythonMouseClicked

    private void arbolSintaxisActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_arbolSintaxisActionPerformed
        String file_input_path = "Arbol202010905.dot";
                String do_path = "C:\\Program Files\\Graphviz\\bin\\dot.exe";

                String file_get_path = "Arbol_202010905.jpg";
                try {
                    ProcessBuilder pBuilder;
                    pBuilder = new ProcessBuilder(do_path, "-Tjpg", "-o", file_get_path, file_input_path);
                    pBuilder.redirectErrorStream(true);
                    pBuilder.start();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
                try {
                    Desktop.getDesktop().open(new File("Arbol_202010905.jpg"));
                    System.out.println("Genero jpg");
                } catch (IOException ex) {
                    System.out.println("Error " + ex.getMessage());
                }
    }//GEN-LAST:event_arbolSintaxisActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(() -> {
            new MainView().setVisible(true);
        });
    }
    public void totalErrores(String errores){
        labelErrores.setText(errores);
    }
    
    public String textoIngresado(){
        System.out.println(textArea.getText());
        return textArea.getText();
    }
    
    public static String leerArchivo(String ruta) throws IOException {
        String texto = "";
        BufferedReader lector = null;
        
        try {
            File archivo = new File(ruta);
            lector = new BufferedReader(new FileReader(archivo));
            
            String linea = lector.readLine();
            
            while (linea != null) {                
                texto += linea +"\n";
                linea = lector.readLine();
            }
        } catch (IOException e) {
            System.out.println("Ocurrio un error.");
        } finally {
            if(lector != null){
                lector.close();
            }
        }
        
        return texto;
        
    }
    
    public  void writeFile(File ruta) throws IOException {
        BufferedWriter writer = null;

        try {
            FileWriter fw = new FileWriter(ruta);
            writer = new BufferedWriter(fw);
            writer.write(textArea.getText());
            System.out.println("File written successfully");
        } catch (IOException e) {
            System.out.println("Ocurrio un error.");
        } finally {
            try{
	      if(writer!=null)
		 writer.close();
	   }catch(IOException ex){
	       System.out.println("Error in closing the BufferedWriter"+ex);
	    }
        }
        
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JMenuItem arbolSintaxis;
    private javax.swing.JButton cleanButton;
    private javax.swing.JPanel contenedor;
    private javax.swing.JMenu file;
    private javax.swing.JMenuItem fileSaveAs;
    private javax.swing.JMenu jMenu3;
    private javax.swing.JMenu jMenu4;
    private javax.swing.JMenuBar jMenuBar2;
    private javax.swing.JMenuItem jMenuItem1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel labelErrores;
    private javax.swing.JLabel labelTextErrores;
    private javax.swing.JMenuBar menuBar;
    private javax.swing.JMenuItem openFile;
    private javax.swing.JMenu report;
    private javax.swing.JMenuItem reportErrors;
    private javax.swing.JMenuItem reportFlowChart;
    private javax.swing.JButton runButton;
    private javax.swing.JMenuItem tecManual;
    private javax.swing.JTextArea textArea;
    private javax.swing.JLabel tituloCarnet;
    private javax.swing.JMenuItem userManual;
    private javax.swing.JMenu view;
    private javax.swing.JButton viewCGolang;
    private javax.swing.JButton viewCPython;
    // End of variables declaration//GEN-END:variables

}
