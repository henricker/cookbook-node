import fs from 'fs';
const file = './file.txt';

fs.chmodSync(
  file,
  fs.constants.S_IRUSR |
    fs.constants.S_IWUSR |
    fs.constants.S_IRGRP |
    fs.constants.S_IWGRP |
    fs.constants.S_IROTH
); // => chmod a+r file.txt + chmod og+w file.txt => -rw-rw-r-- file.txt

/**
 * 
  The three actions you can perform a file:

      read (view the file
      write (create, edit or delete)
      execute (run a script/program or enter a directory)

  The categories of people's access:

      a all users
      u the owner user 
      g the owner group
      o others (neither u, nor g)

  The format for permissions is:

  chmod {a,u,g,o} {+,-} {r,w,x} files 
  The plus ("+") sign indicates give permission.  The minus ("-") sign indicates remove permission.

  Permission examples: 

      chmod a+r files are readable by all
      chmod a-r files cancels the ability for all to read the file
      chmod a-rwx cancels all access for all
      chmod g+rw files give the group read and write permission
      chmod u+rwx files give the owner all permissions
      chmod og+rw files give the world and the group read and write permission 

  To set permissions use the chmod program:

  For example,  If you want all people to read the home page of your Web site (the files which reside in your public_html directory), but do not want to give permission for viewers to alter your files,  you would type:

  chmod a+r  index.html 
  [The default "home" page in a Web directory should always be called index.html. The string a+r indicates that all can read the Web page file.  Only the "home" /default page in each folder is called index.html.  Change the filename when you set permissions for other files.]

  Directory permissions:
  Permissions are a bit different for directories:

      read allows a user to view the directory's contents
      write allows a user to create new files or delete files in the directory. 
      execute determines if the user can enter (cd) into the directory or run a program or script.

  If you want all group members to be able to write, edit, or delete files you would type at the prompt (in the correct directory): chmod g+w (All group members can write to the file. (Caution -  This means that a user with write privileges in the DIRECTORY can delete files even if he/she does NOT have write permissions for the FILE!)  If you want to create a group of users whose access can be controlled by the group permissions, consult with your system administrator. The system administrator usually has to set up the group.

  Some prefer to use numbers to set permissions.  The number equivalents of r, w, x are:
  
  OWNER
  (USER)  	GROUP
  (if you share a directory.file) 	
  PUBLIC
  (OTHERS)
  R     W      X
    
  R    W    X 
    
  R  W  X
  400   200   100
    
  40   20    10
    
    4    2   1

  In order to translate the mode you require to a number, simply add the numbers corresponding to the individual permissions you want. So, if you want the files to be readable and writable by the owner (that is, you), readable by the group, and readable by all the other users of the system, you perform the addition:
  
  4 	0 	0 	
  owner
    R ead
  2 	0 	0 	
  owner
    W rite
  1 	0 	0 	
  owner
    X execute
  , 	4 	0 	
  group
    R ead
  , 	1 	0 	
  group
    X execute
  , 	, 	4 	
  public
    R ead
  , 	, 	1 	
  public
    X execute
  _ 	_ 	_ 		
  7 	5 	5 		

  Your chmod permission command will look like:

  chmod 755 (Leave a space and type in filename.)
  Owner can read, write, execute files
  Group can read and execute (use) but not change files.
  Public can read and execute (use) but not change.
 */