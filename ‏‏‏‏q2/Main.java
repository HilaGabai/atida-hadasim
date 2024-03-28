import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice;

        do {
            System.out.println("Please choose an option:");
            System.out.println("press 1 to the Rectangular tower");
            System.out.println("press 2 to the triangular");
            System.out.println("press 3 to exit");

            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    calculateRectangle(scanner);
                    break;
                case 2:
                    calculateTriangular(scanner);
                    break;
                case 3:
                    System.out.println("Exiting the program.");
                    break;
                default:
                    System.out.println("Invalid option. Please try again.");
            }

        } while (choice != 3);

        scanner.close();
    }

    public static void calculateRectangle(Scanner scanner) {
        int perimeter=0;
        System.out.print("Enter height: ");
        int height = scanner.nextInt();
        System.out.print("Enter width: ");
        int width = scanner.nextInt();

        if(height==width||Math.abs(height - width) > 5)
            System.out.println("The area of the rectangle is: " + height*width);
        else{
            perimeter = (height * 2) + (width * 2);
            System.out.println("The perimeter of the rectangle is: " + perimeter );
        }
    }

    public static void calculateTriangular(Scanner scanner) {
        System.out.print("Enter height: ");
        int height = scanner.nextInt();
        System.out.print("Enter width: ");
        int width = scanner.nextInt();

        int choice;
        System.out.println("Press 1 for the perimeter of the triangle");
        System.out.println("Press 2 to print the triangle");
        choice=scanner.nextInt();

        switch (choice) {
            case 1:
                double a = (double)(width) / 2;
                double c = Math.sqrt(Math.pow((a), 2) + Math.pow(height, 2));
                String formattedResult = String.format("%.2f", ((c * 2) + width));
                System.out.println("perimeterTriangle is: " + formattedResult);
                break;
            case 2:
                printTriangular(height, width);
                break;
            default:
                System.out.println("Invalid option. Please try again.");
        }
    }

    public static void printTriangular(int height, int width) {
        if (isEven(width) || width > 2 * height) {
            System.out.println("The triangle cannot be printed.");
        } else {
            printaSterisks(height, width);
        }
    }

    public static boolean isEven(int number) {
        return number % 2 == 0;
    }
    



public static void printaSterisks(int height, int width) {
    int asterisks = 1;
    int spaces = (width - asterisks) / 2;
    int op = width / 2 - 1; 
    int h = (height - 2) / op;
    int s = (height - 2) % op;
    String row = " ".repeat(spaces) + "*".repeat(asterisks);
    System.out.println(row);
    for (int i = 0; i < op; i++) {
        asterisks += 2;
        if (spaces > 0) {
            spaces -= 1;
        }
        for (int j = 0; j < (h + s); j++) {
            row = " ".repeat(spaces) + "*".repeat(asterisks);
            System.out.println(row);
        }
        s = 0;
    }
    row = "*".repeat(asterisks + 2);
    System.out.println(row);
}

}
    
        
        
        
        
        
        
        
        












