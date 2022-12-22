import javax.swing.*;

public class IntroSessionForSwing {

    IntroSessionForSwing(){
        JFrame  myframe= new JFrame("Today's Frame");


        JTextArea area=new JTextArea("Welcome to javatpoint");
        area.setBounds(10,30, 200,200);
        myframe.add(area);
        myframe.setSize(300,300);
        myframe.setLayout(null);
        myframe.setVisible(true);
    }

    public static void main(String[] args) {
        IntroSessionForSwing xy= new IntroSessionForSwing();
    }
}
