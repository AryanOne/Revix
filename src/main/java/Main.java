import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Main {
  public static void main(String args[]) {
    Scanner input = new Scanner(System.in);

    String command = input.nextLine();

    if (command.equals("revix init")) {
      File myFile = new File("Green.txt");
      try {
        if (myFile.createNewFile()) {
          System.out.println("Created a File name " + myFile.getName());
        } else {
          System.out.println("File already exist or not created");
        }
      } catch (IOException e) {
        System.out.println("Error Occured");
        e.printStackTrace();
      }
    } else {
      System.out.println("command dont exist");
    }

    input.close();
  }
}
