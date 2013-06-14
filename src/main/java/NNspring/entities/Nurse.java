package NNspring.entities;

/**
 * Created with IntelliJ IDEA.
 * User: Etai
 * Date: 5/17/13
 * Time: 5:29 PM
 * To change this template use File | Settings | File Templates.
 */
public class Nurse extends Person {
              //test comment
    public Nurse() {
    }

    public Nurse(String lastName, String firstName, long id) {
        super(lastName, firstName, id);
    }

    public Nurse(String lastName, String firstName) {
        super(lastName, firstName);
    }


}
