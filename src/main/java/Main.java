import java.io.File;
import java.io.IOException;

public class Main {
  public static void main(String args[]) {
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
  }
}
