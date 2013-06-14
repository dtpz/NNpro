package NNspring.entities;

/**
 * Created with IntelliJ IDEA.
 * User: Etai
 * Date: 5/17/13
 * Time: 5:20 PM
 * To change this template use File | Settings | File Templates.
 */
public class Person {
    private String lastName;
    private String firstName;
    private long id;

    public Person() {
    }

    public Person(String lastName, String firstName, long id) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.id = id;
    }

    public Person(String lastName, String firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {

        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    @Override
    public String toString() {
        return lastName
                + ", " + firstName
                + "\t ID: " + id;
    }



}
