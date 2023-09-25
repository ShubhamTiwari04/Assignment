import java.util.HashSet;

public class PangramChecker {
    public static void main(String[] args) {
        String input = "Hello Guyz";
        boolean isPangram = isPangram(input.toLowerCase()); 
        if (isPangram) {
            System.out.println("Pangram.");
        } else {
            System.out.println("Not Pangram.");
        }
    }

    public static boolean isPangram(String str) {

        HashSet<Character> letterSet = new HashSet<>();

        for (char c : str.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                letterSet.add(c);
            }
        }
        
        return letterSet.size() == 26;
    }
}
