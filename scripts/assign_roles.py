import random
import json
import pandas as pd

boys = ['karl', 'joe' , 'alex', 'ian', 'dario', 'vince']
girls = ['erin', 'sonia', 'ana', 'lamya', 'alyssa']

broles = ['blacksparrow', 'burntbeard', 'turner', 'barburosa', 'rackam']
groles = ['smythe', 'hawthorne', 'blackbeard', 'darkwaters', 'redd']

passwords = ['ship', 'matey', 'sword', 'plank', 'canon', \
             'parrot', 'ahoy', 'grog', 'sailer', 'booty']

random.shuffle(boys)
random.shuffle(girls)
random.shuffle(passwords)

pass_map = {x:y for x,y in zip(girls+boys, passwords)}
roll_map = {x:y for x,y in zip(passwords, groles+broles)}

secrets = {
        "user_passwords": pass_map,
        "password_roles": roll_map
}

with open('static/secrets.json', 'w') as fout:
    fout.write(json.dumps(secrets, indent=4))


df = pd.DataFrame(pass_map.items(), columns=["Name", "Password"])
df.to_csv('static/user_passwords.csv', index=None)

