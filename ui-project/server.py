from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
import json
from sys import argv

app = Flask(__name__)

# DEBUG global variable defined in main: When true, enables debugging messages to be printed in console
# This is enabled by running the server with python server.py d

# next_id = "0"
# # Main data dictionary of dictionaries, imported from json
# data = {}
# # List of IDs from data, ordered by number of views descending
# data_views_list = []

# # List of attributes to search through (hardcoded)
# search_attributes_list = ["bpm", "title", "artist", "key", "genre"]

# # Delimiter string used for replace
# delimiters = " ,'-()/"

# # Number of most viewed videos to display on home page
# num_most_viewed = 3

# Python Functions 

# Logging function when debug is enabled
def log(desc, item):
    if DEBUG:
        print("------ " + desc + " ------")
        print(item)

# # Import data from json to python dict data and convert types
# # Then sort the data into lists, for easy searching through in other functions
# def import_data(path):
#     global data
#     global data_views_list
#     global next_id

#     with open(path) as f:
#         data = json.load(f)
#     # Generate page titles by stripping delimiters
#     # Convert views to integers
#     for value in data.values():
#         value["views"] = int(value["views"])
#         page = value["title"].lower()
#         for delimiter in delimiters:
#             page = page.replace(delimiter, "")
#         next_id = str(max(int(next_id), int(value["id"])))
#     next_id = str(int(next_id) + 1)
#     # Generate page titles
#     sort_data_views_list()

# # Sort data views list by views descending
# def sort_data_views_list():
#     global data_views_list
#     data_views_list = []
#     for value in data.values():
#         id = value["id"]
#         views = value["views"]
#         data_views_list.append((views, id))
#     log("Data_views_list sorted tuples", [track for track in sorted(data_views_list, key = lambda item: item[0], reverse = True)])

#     data_views_list = [track[1] for track in sorted(data_views_list, key = lambda item: item[0], reverse = True)]
#     log("Data_views_list final result", data_views_list)



# # Get home data (we use the 3 most viewed videos in this case) as a subset of data
# def get_home_data():
#     log("Home data", [data[key]["title"] for key in data_views_list][:num_most_viewed])
#     home_data = []
#     for key in data_views_list[:num_most_viewed]:
#         home_data.append(data[key])
#     return {"tracks": home_data}

# # Get search data
# def get_search_data(query):
#     # Search through bpm, title, key, genre, artist
#     # This is case insensitive
#     search_data = []
#     for value in data.values():
#         for attribute in search_attributes_list:
#             # print(query, value[attribute].lower())
#             if query in value[attribute].lower():
#                 search_data.append(value)
#                 break
#     log("Search data for " + query + ":", [value["title"] for value in search_data])
#     return ({"tracks": search_data, "query": query})

# # Get view data along with its neighbors and increment views for the main track
# def get_view_data(id):
#     primary_id = id
#     primary_bpm = data[primary_id]["bpm"]
#     primary_key = data[primary_id]["key"]
    
#     # Increment view for the main track and resort data_views_list
#     data[primary_id]["views"] += 1
#     sort_data_views_list()

#     # Get a list of keys to mix into according to the Camelot Wheel; can go +1, -1, +0 or +B, +A only
#     key_list = []
#     key_number = int(primary_key[:-1])
#     key_letter = primary_key[-1]
#     if (key_number + 1 <= 12):
#         key_list.append(str(key_number + 1) + key_letter)
#     if (key_number - 1 >= 1):
#         key_list.append(str(key_number - 1) + key_letter)
#     if (key_letter == 'A'):
#         key_list.append(str(key_number) + "B")
#     if (key_letter == 'B'):
#         key_list.append(str(key_number) + "A")
#     key_list.append(primary_key)
#     log("key_list", key_list)
    
#     # Search through all entries for matching key and bpm
#     track_data = []
#     for value in data.values():
#         if value["bpm"] == primary_bpm and value["key"] in key_list:
#             track_data.append(value)
#         elif value["id"] == primary_id:
#             track_data.append(value)

#     log("Track data for " + id + ":", [value["title"] for value in track_data])
#     log("Primary id", primary_id)
#     return ({"tracks": track_data, "primary_id": primary_id})        

# # Add track to data and update next_id, returning the id of the track added
# def add_data(track):
#     global next_id
#     global data
#     track["id"] = next_id
#     track["views"] = 0
#     data[next_id] = track
#     next_id = str(int(next_id) + 1)
#     return track["id"]

# def edit_data(track):
#     global data
#     track["views"] = 0
#     id = track["id"]
#     data[id] = track
#     return id
# ROUTES

@app.route('/')
def home():
   return render_template('home.html', data = "")   

@app.route('/learn/<id>')
def learn(id):
    return render_template('learn.html', data = id)

@app.route('/quiz/<id>')
def quiz(id):
    return render_template('quiz.html', data = id)

@app.route('/results/<id>')
def results(id):
    return render_template('results.html', data = id)

@app.route('/answers/<id>')
def answers(id):
    return render_template('answers.html', data = id)


# @app.route('/search/<query>')
# def search(query):    
#     return render_template('search.html', data = get_search_data(query)) 

# @app.route('/view/<id>')
# def view(id):
#     return render_template('view.html', data = get_view_data(id) ) 

# @app.route('/add')
# def add():
#     return render_template('add.html') 

# @app.route('/edit/<id>')
# def edit(id):
#     print(get_view_data(id))
#     return render_template('edit.html', data = get_view_data(id) ) 

# @app.route('/edit_track', methods = ['POST'])
# def edit_track():
#     json_data = request.get_json()
#     print(json_data)
#     edit_data(json_data)
#     return (json_data["id"])

# @app.route('/add_track', methods = ['POST'])
# def add_track():
#     json_data = request.get_json()
#     print(json_data)
#     return(add_data(json_data))


 



# Import data from database.json in static
if __name__ == '__main__':
    global DEBUG
    # Debug message is enabled if using command line argument d
    if len(argv) == 2 and argv[1] == "d":
        DEBUG = True
        print(" * Debugging messages will be printed to the console") 
    else:
        DEBUG = False
        print(" * Debugging messages will not be printed to the console")         
    # Test statements
    # Run app
    app.run(debug = True)




