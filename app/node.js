'use strict';

const express = require('express');
const { Client } = require('@elastic/elasticsearch');
const app = express();
const port = 3000;

// Elasticsearch client setup
const client = new Client({
    node: 'http://localhost:9200' // Connect to your local Elasticsearch instance
});

app.use(express.json());

app.get('/commentaire', async (req, res) => {
    // Get the search term from the query parameter and convert it to lowercase
    const searchTerm = req.query.query.toLowerCase();

    if (!searchTerm) {
        return res.status(400).json({ error: 'Missing query parameter' });
    }

    try {
        // Perform a search using a combination of 'match_phrase' and 'prefix' queries
        const result = await client.search({
            index: 'commentaire', // The Elasticsearch index you're querying
            query: {
                bool: {
                    should: [
                        {
                            match_phrase: {
                                c_contenu: searchTerm // Exact phrase matching with lowercase query
                            }
                        },
                        {
                            prefix: {
                                c_contenu: searchTerm // Prefix matching with lowercase query
                            }
                        }
                    ],
                    minimum_should_match: 1 // At least one of the conditions should match
                }
            }
        });

        // Send the search result back as the response
        res.json(result.hits.hits);
    } catch (error) {
        console.error('Error in GET /commentaire:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.get('/publication', async (req, res) => {
    const searchTerm = req.query.query.toLowerCase();

    if (!searchTerm) {
        return res.status(400).json({ error: 'Missing query parameter' });
    }

    try {
        const result = await client.search({
            index: 'publication',
            query: {
                bool: {
                    should: [
                        {
                            match_phrase: {
                                pcontenu: searchTerm // Assuming the content field is named 'p_contenu'
                            }
                        },
                        {
                            prefix: {
                                pcontenu: searchTerm
                            }
                        }
                    ],
                    minimum_should_match: 1
                }
            }
        });
        res.json(result.hits.hits);
    } catch (error) {
        console.error('Error in GET /publication:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
